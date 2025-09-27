const fs = require('fs');
const path = require('path');

// 일정 데이터를 파싱하는 클래스
class ScheduleParser {
  constructor(filePath) {
    this.filePath = filePath;
    this.schedule = this.parseSchedule();
  }

  parseSchedule() {
    try {
      const content = fs.readFileSync(this.filePath, 'utf8');
      const lines = content.split('\n');
      
      const teams = [];
      let currentTeam = null;
      
      for (const line of lines) {
        const trimmed = line.trim();
        
        // 팀 헤더 감지 (팀명 + 기간 패턴)
        if (trimmed.match(/^[A-Z]+ 팀/) || trimmed.match(/^[A-Z]+팀/)) {
          const teamMatch = trimmed.match(/^([A-Z\/]+) 팀?\s*(.*)/);
          if (teamMatch) {
            currentTeam = {
              name: teamMatch[1] + '팀',
              period: teamMatch[2],
              tasks: []
            };
            teams.push(currentTeam);
          }
        }
        
        // 작업 항목 감지 (날짜 패턴 포함)
        if (currentTeam && trimmed.match(/\d{1,2}\/\d{1,2}/)) {
          const task = this.parseTask(trimmed);
          if (task) {
            currentTeam.tasks.push(task);
          }
        }
      }
      
      return { teams };
    } catch (error) {
      console.error('일정 파싱 오류:', error);
      return { teams: [] };
    }
  }

  parseTask(line) {
    // 날짜 패턴 추출 (예: 8/25~8/31, 9/1~9/7)
    const dateMatch = line.match(/(\d{1,2}\/\d{1,2})~(\d{1,2}\/\d{1,2})/);
    if (!dateMatch) return null;

    const startDate = dateMatch[1];
    const endDate = dateMatch[2];
    
    // 작업명 추출 (날짜 앞부분)
    const titleMatch = line.match(/^([^0-9]+)/);
    const title = titleMatch ? titleMatch[1].trim() : line;

    // 우선순위 추출 (괄호 안의 내용)
    const priorityMatch = line.match(/\(([^)]+)\)/);
    const priority = this.determinePriority(line);

    return {
      id: this.generateId(title),
      title: title,
      start_date: this.parseDate(startDate),
      end_date: this.parseDate(endDate),
      priority: priority,
      assignee: '미지정',
      status: this.determineStatus(line),
      notification_days: this.getNotificationDays(priority),
      raw_line: line
    };
  }

  parseDate(dateStr) {
    // 2024년 기준으로 날짜 변환 (실제로는 현재 연도 사용)
    const currentYear = new Date().getFullYear();
    const [month, day] = dateStr.split('/');
    return `${currentYear}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }

  determinePriority(line) {
    if (line.includes('must') || line.includes('필수') || line.includes('high')) return 'high';
    if (line.includes('should') || line.includes('중요')) return 'medium';
    return 'low';
  }

  determineStatus(line) {
    if (line.includes('완료') || line.includes('completed')) return 'completed';
    if (line.includes('진행') || line.includes('ongoing')) return 'in_progress';
    return 'pending';
  }

  getNotificationDays(priority) {
    switch (priority) {
      case 'high': return [1, 3, 7]; // 1일, 3일, 7일 전
      case 'medium': return [1, 3]; // 1일, 3일 전
      case 'low': return [1]; // 1일 전
      default: return [1];
    }
  }

  generateId(title) {
    return title.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 20);
  }

  // 마감일이 임박한 작업들 찾기
  getUpcomingDeadlines(days = 7) {
    const upcoming = [];
    const today = new Date();
    const futureDate = new Date(today.getTime() + (days * 24 * 60 * 60 * 1000));

    for (const team of this.schedule.teams) {
      for (const task of team.tasks) {
        const endDate = new Date(task.end_date);
        if (endDate >= today && endDate <= futureDate && task.status !== 'completed') {
          upcoming.push({
            ...task,
            team: team.name,
            days_remaining: Math.ceil((endDate - today) / (24 * 60 * 60 * 1000))
          });
        }
      }
    }

    return upcoming.sort((a, b) => new Date(a.end_date) - new Date(b.end_date));
  }

  // JSON으로 저장
  saveAsJSON(outputPath) {
    fs.writeFileSync(outputPath, JSON.stringify(this.schedule, null, 2));
    console.log(`일정이 ${outputPath}에 저장되었습니다.`);
  }
}

module.exports = ScheduleParser;
