const ScheduleParser = require('./schedule-parser');

class CalendarGenerator {
  constructor(scheduleFile) {
    this.parser = new ScheduleParser(scheduleFile);
    this.tasks = this.getAllTasks();
  }

  getAllTasks() {
    const allTasks = [];
    for (const team of this.parser.schedule.teams) {
      for (const task of team.tasks) {
        allTasks.push({
          ...task,
          team: team.name
        });
      }
    }
    return allTasks;
  }

  // 9월 달력 생성
  generateSeptemberCalendar() {
    const year = 2025;
    const month = 8; // 9월 (0부터 시작)
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay(); // 0=일요일

    let calendar = '';
    
    // 헤더
    calendar += '📅 2025년 9월 프로젝트 일정 달력\n';
    calendar += '='.repeat(60) + '\n\n';
    
    // 요일 헤더
    calendar += '일    월    화    수    목    금    토\n';
    calendar += '─'.repeat(42) + '\n';

    // 달력 그리드
    let day = 1;
    let week = 0;
    
    // 첫 번째 주 (빈 칸으로 시작)
    for (let i = 0; i < startDayOfWeek; i++) {
      calendar += '     ';
    }
    
    for (let i = startDayOfWeek; i < 7; i++) {
      calendar += this.formatDay(day, year, month);
      day++;
    }
    calendar += '\n';

    // 나머지 주들
    while (day <= daysInMonth) {
      for (let i = 0; i < 7 && day <= daysInMonth; i++) {
        calendar += this.formatDay(day, year, month);
        day++;
      }
      calendar += '\n';
    }

    return calendar;
  }

  formatDay(day, year, month) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayTasks = this.tasks.filter(task => 
      task.start_date === dateStr || task.end_date === dateStr
    );

    let dayStr = String(day).padStart(2, '0');
    
    if (dayTasks.length > 0) {
      // 작업이 있는 날은 색상 표시
      const hasHighPriority = dayTasks.some(task => task.priority === 'high');
      const hasDeadline = dayTasks.some(task => task.end_date === dateStr);
      
      if (hasHighPriority || hasDeadline) {
        dayStr = `🔴${dayStr}`;
      } else {
        dayStr = `🟡${dayStr}`;
      }
    }

    return dayStr.padEnd(5);
  }

  // 9월 일정 상세 정보
  getSeptemberTasks() {
    const septemberTasks = this.tasks.filter(task => {
      const startMonth = new Date(task.start_date).getMonth();
      const endMonth = new Date(task.end_date).getMonth();
      return startMonth === 8 || endMonth === 8; // 9월
    });

    return septemberTasks.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
  }

  // 일정별 상세 정보 출력
  generateDetailedSchedule() {
    const septemberTasks = this.getSeptemberTasks();
    let details = '\n📋 9월 상세 일정\n';
    details += '='.repeat(50) + '\n\n';

    const tasksByDate = {};
    
    septemberTasks.forEach(task => {
      const startDate = new Date(task.start_date);
      const endDate = new Date(task.end_date);
      
      // 시작일과 마감일 모두 추가
      if (startDate.getMonth() === 8) { // 9월
        const dateKey = startDate.toISOString().split('T')[0];
        if (!tasksByDate[dateKey]) tasksByDate[dateKey] = [];
        tasksByDate[dateKey].push({...task, type: '시작'});
      }
      
      if (endDate.getMonth() === 8) { // 9월
        const dateKey = endDate.toISOString().split('T')[0];
        if (!tasksByDate[dateKey]) tasksByDate[dateKey] = [];
        tasksByDate[dateKey].push({...task, type: '마감'});
      }
    });

    // 날짜순으로 정렬하여 출력
    Object.keys(tasksByDate).sort().forEach(date => {
      const dateObj = new Date(date);
      const dayName = dateObj.toLocaleDateString('ko-KR', { 
        month: 'long', 
        day: 'numeric', 
        weekday: 'long' 
      });
      
      details += `📅 ${dayName}\n`;
      
      tasksByDate[date].forEach(task => {
        const priority = {'high': '🔴', 'medium': '🟡', 'low': '🟢'}[task.priority];
        const type = task.type === '시작' ? '🚀' : '🏁';
        details += `   ${type} ${priority} ${task.team}: ${task.title}\n`;
      });
      details += '\n';
    });

    return details;
  }

  // 전체 9월 달력 + 상세 일정 출력
  generateFullCalendar() {
    return this.generateSeptemberCalendar() + this.generateDetailedSchedule();
  }
}

module.exports = CalendarGenerator;

