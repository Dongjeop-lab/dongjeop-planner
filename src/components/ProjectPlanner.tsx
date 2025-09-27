import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { scheduleData } from '../data/scheduleData';
import { Task, Team } from '../types';
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
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [teamFilter, setTeamFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    filterTasks();
  }, [searchTerm, teamFilter, priorityFilter, statusFilter]);

  const getAllTasks = (): Task[] => {
    const allTasks: Task[] = [];
    scheduleData.teams.forEach(team => {
      team.tasks.forEach(task => {
        allTasks.push({
          ...task,
          team: team.name
        } as Task & { team: string });
      });
    });
    return allTasks;
  };

  const filterTasks = () => {
    const allTasks = getAllTasks();
    const filtered = allTasks.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTeam = !teamFilter || task.assignee === teamFilter;
      const matchesPriority = !priorityFilter || task.priority === priorityFilter;
      const matchesStatus = !statusFilter || task.status === statusFilter;

      return matchesSearch && matchesTeam && matchesPriority && matchesStatus;
    });
    setFilteredTasks(filtered);
  };

  const getCalendarEvents = (): CalendarEvent[] => {
    const events: CalendarEvent[] = [];
    
    filteredTasks.forEach(task => {
      if (task.start_date === task.end_date) {
        events.push({
          id: task.id,
          title: task.title,
          start: task.start_date,
          allDay: true,
          backgroundColor: getTeamColor(task.assignee),
          borderColor: getTeamColor(task.assignee),
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
          backgroundColor: getTeamColor(task.assignee),
          borderColor: getTeamColor(task.assignee),
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
  };

  const getTeamColor = (teamName: string): string => {
    const colorMap: { [key: string]: string } = {
      'FE팀': '#FF6B6B',
      'UXUI팀': '#4ECDC4',
      'PM팀': '#45B7D1',
      'AIML팀': '#96CEB4',
      'BE/DE팀 - 크롤링 & 라벨링': '#F4D03F',
      'BE/DE팀 - Service_v1 개발': '#DDA0DD',
      'Service_v1': '#B0BEC5'
    };
    return colorMap[teamName] || '#95a5a6';
  };

  const getTeamClass = (teamName: string): string => {
    const teamMap: { [key: string]: string } = {
      'FE팀': 'fe-team',
      'UXUI팀': 'uxui-team',
      'PM팀': 'pm-team',
      'AIML팀': 'aiml-team',
      'BE/DE팀 - 크롤링 & 라벨링': 'bede-crawling-team',
      'BE/DE팀 - Service_v1 개발': 'bede-service-team',
      'Service_v1': 'all-team'
    };
    return teamMap[teamName] || '';
  };

  const calculateStats = () => {
    const totalTasks = filteredTasks.length;
    const completedTasks = filteredTasks.filter(task => task.status === 'completed').length;
    const upcomingTasks = filteredTasks.filter(task => {
      const endDate = new Date(task.end_date);
      const today = new Date();
      const diffTime = endDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 7 && task.status !== 'completed';
    }).length;

    return { totalTasks, completedTasks, upcomingTasks };
  };

  const handleEventClick = (info: any) => {
    const task = getAllTasks().find(t => t.id === info.event.id);
    if (task) {
      setSelectedTask(task);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTask(null);
  };

  const stats = calculateStats();

  return (
    <div className="project-planner">
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <h1>동접 프로젝트 플래너</h1>
          <p>팀별 일정 관리 및 진행 상황 추적</p>
          
          <div className="header-stats">
            <div className="stat-item">
              <div className="stat-number">{stats.totalTasks}</div>
              <div className="stat-label">전체 작업</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.completedTasks}</div>
              <div className="stat-label">완료된 작업</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.upcomingTasks}</div>
              <div className="stat-label">마감 임박</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="filter-group">
          <input
            type="text"
            placeholder="작업 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filter-group">
          <select
            value={teamFilter}
            onChange={(e) => setTeamFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">모든 팀</option>
            {scheduleData.teams.map(team => (
              <option key={team.name} value={team.name}>{team.name}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">모든 우선순위</option>
            <option value="high">높음</option>
            <option value="medium">보통</option>
            <option value="low">낮음</option>
          </select>
        </div>

        <div className="filter-group">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">모든 상태</option>
            <option value="pending">대기</option>
            <option value="in_progress">진행중</option>
            <option value="completed">완료</option>
          </select>
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
            end: '2025-11-30'
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
