import React, { useState, useCallback } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { scheduleData } from '../data/scheduleData';
import { Task } from '../types';
import './ProjectPlanner.css';

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
  allDay: boolean;
  backgroundColor: string;
  borderColor: string;
  extendedProps: {
    team: string;
    priority: string;
    status: string;
    assignee: string;
  };
}

const ProjectPlanner: React.FC = () => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [showModal, setShowModal] = useState(false);

  const getAllTasks = useCallback((): Task[] => {
    const allTasks: Task[] = [];
    const currentDate = new Date();
    
    scheduleData.teams.forEach(team => {
      team.tasks.forEach(task => {
        // 현재 날짜 기준으로 상태 자동 계산
        const startDate = new Date(task.start_date);
        const endDate = new Date(task.end_date);
        
        let autoStatus = task.status;
        
        // 현재 날짜가 시작일 이전이면 pending
        if (currentDate < startDate) {
          autoStatus = 'pending';
        }
        // 현재 날짜가 마감일 이후면 completed
        else if (currentDate > endDate) {
          autoStatus = 'completed';
        }
        // 시작일과 마감일 사이면 in_progress (단, 이미 completed인 것은 유지)
        else if (task.status !== 'completed') {
          autoStatus = 'in_progress';
        }
        
        allTasks.push({
          ...task,
          team: team.name,
          status: autoStatus
        } as Task & { team: string });
      });
    });
    return allTasks;
  }, []);

  const allTasks = getAllTasks();

  const getCalendarEvents = useCallback((): CalendarEvent[] => {
    const events: CalendarEvent[] = [];
    
    // 색상 맵을 함수 내부에서 정의
    const colorMap: { [key: string]: string } = {
      'FE팀': '#FF6B6B',
      'UXUI팀': '#4ECDC4',
      'PM팀': '#45B7D1',
      'AIML팀': '#96CEB4',
      'BE/DE팀 - 크롤링 & 라벨링': '#F4D03F',
      'BE/DE팀 - Service_v1 개발': '#DDA0DD',
      'Service_v1': '#B0BEC5',
      '휴일': '#FFB6C1',
      '동접팀': '#FF8C00'
    };
    
    const getColor = (teamName: string): string => {
      return colorMap[teamName] || '#95a5a6';
    };
    
    allTasks.forEach(task => {
      const teamColor = getColor(task.assignee);
      
      if (task.start_date === task.end_date) {
        events.push({
          id: task.id,
          title: task.title,
          start: task.start_date,
          allDay: true,
          backgroundColor: teamColor,
          borderColor: teamColor,
          extendedProps: {
            team: task.assignee,
            priority: task.priority,
            status: task.status,
            assignee: task.assignee
          }
        });
      } else {
        events.push({
          id: task.id,
          title: task.title,
          start: task.start_date,
          end: new Date(new Date(task.end_date).getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          allDay: true,
          backgroundColor: teamColor,
          borderColor: teamColor,
          extendedProps: {
            team: task.assignee,
            priority: task.priority,
            status: task.status,
            assignee: task.assignee
          }
        });
      }
    });

    return events;
  }, [allTasks]);

  const getTeamColor = useCallback((teamName: string): string => {
    const colorMap: { [key: string]: string } = {
      'FE팀': '#FF6B6B',
      'UXUI팀': '#4ECDC4',
      'PM팀': '#45B7D1',
      'AIML팀': '#96CEB4',
      'BE/DE팀 - 크롤링 & 라벨링': '#F4D03F',
      'BE/DE팀 - Service_v1 개발': '#DDA0DD',
      'Service_v1': '#B0BEC5',
      '휴일': '#FFB6C1',
      '동접팀': '#FF8C00'
    };
    return colorMap[teamName] || '#95a5a6';
  }, []);

  const getTeamClass = useCallback((teamName: string): string => {
    const teamMap: { [key: string]: string } = {
      'FE팀': 'fe-team',
      'UXUI팀': 'uxui-team',
      'PM팀': 'pm-team',
      'AIML팀': 'aiml-team',
      'BE/DE팀 - 크롤링 & 라벨링': 'bede-crawling-team',
      'BE/DE팀 - Service_v1 개발': 'bede-service-team',
      'Service_v1': 'all-team',
      '휴일': 'holiday-team',
      '동접팀': 'dongjeop-team'
    };
    return teamMap[teamName] || '';
  }, []);

  const handleEventClick = useCallback((info: any) => {
    const task = getAllTasks().find(t => t.id === info.event.id);
    if (task) {
      setSelectedTask(task);
      setShowModal(true);
    }
  }, [getAllTasks]);

  const closeModal = useCallback(() => {
    setShowModal(false);
    setSelectedTask(null);
  }, []);

  return (
    <div className="project-planner">
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <h1>동접 프로젝트 플래너</h1>
        </div>
      </div>


      {/* Calendar */}
      <div className="calendar-container">
        <div className="calendar-header">
          <h2>프로젝트 일정</h2>
        </div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locale="ko"
          firstDay={1}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,listWeek'
          }}
          height="auto"
          aspectRatio={1.35}
          events={getCalendarEvents()}
          eventClick={handleEventClick}
          validRange={{
            start: '2025-08-01',
            end: '2025-12-31'
          }}
        />
      </div>

      {/* Legend */}
      <div className="legend">
        <h3>팀별 범례</h3>
        <div className="legend-items">
          {scheduleData.teams.map(team => (
            <div key={team.name} className="legend-item">
              <span 
                className={`legend-color ${getTeamClass(team.name)}`}
                style={{ backgroundColor: getTeamColor(team.name) }}
              ></span>
              <span>{team.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Task Modal */}
      {showModal && selectedTask && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedTask.title}</h3>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <div className="task-detail">
                <div className="detail-row">
                  <strong>팀:</strong> {selectedTask.assignee}
                </div>
                <div className="detail-row">
                  <strong>시작일:</strong> {new Date(selectedTask.start_date).toLocaleDateString('ko-KR')}
                </div>
                <div className="detail-row">
                  <strong>마감일:</strong> {new Date(selectedTask.end_date).toLocaleDateString('ko-KR')}
                </div>
                <div className="detail-row">
                  <strong>우선순위:</strong> 
                  <span className={`priority-badge priority-${selectedTask.priority}`}>
                    {selectedTask.priority}
                  </span>
                </div>
                <div className="detail-row">
                  <strong>상태:</strong> 
                  <span className={`status-badge status-${selectedTask.status}`}>
                    {selectedTask.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPlanner;
