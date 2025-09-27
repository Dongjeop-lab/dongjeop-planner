const ScheduleParser = require('./schedule-parser');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Discord 웹훅 URL (환경변수 또는 설정 파일에서 관리 권장)
const WEBHOOK_URL = "https://discord.com/api/webhooks/1419487815267389570/ZGjKYDwMmBYkm1LxK-0AveyTaoZQgofAW5NJNAIMQPy_jRe8WBXAJGqc9eHzp6j1uKpY";

class NotificationSystem {
  constructor(scheduleFile) {
    this.parser = new ScheduleParser(scheduleFile);
    this.lastCheckDate = this.loadLastCheckDate();
  }

  // Discord에 메시지 전송
  async sendToDiscord(message, isEmbed = false) {
    try {
      const payload = isEmbed ? { embeds: [message] } : { content: message };
      
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Discord API 오류: ${response.status}`);
      }
      
      console.log('✅ Discord 알림 전송 완료');
    } catch (error) {
      console.error('❌ Discord 알림 전송 실패:', error.message);
    }
  }

  // 마감일 알림 전송
  async sendDeadlineNotification() {
    const upcoming = this.parser.getUpcomingDeadlines(7);
    
    if (upcoming.length === 0) {
      await this.sendToDiscord("📅 **일정 알림**\n\n🎉 다음 7일 내 마감 예정인 작업이 없습니다!");
      return;
    }

    const embed = {
      title: "📅 마감일 알림",
      description: `다음 7일 내 마감 예정인 작업 **${upcoming.length}개**`,
      color: 0xFF6B6B,
      fields: [],
      timestamp: new Date().toISOString(),
      footer: {
        text: "프로젝트 플래너 알림 시스템"
      }
    };

    for (const task of upcoming.slice(0, 10)) { // 최대 10개만 표시
      const priorityEmoji = {
        'high': '🔴',
        'medium': '🟡', 
        'low': '🟢'
      }[task.priority] || '⚪';

      const statusEmoji = {
        'completed': '✅',
        'in_progress': '🔄',
        'pending': '⏳'
      }[task.status] || '❓';

      embed.fields.push({
        name: `${priorityEmoji} ${task.team} - ${task.title}`,
        value: `**마감일**: ${task.end_date} (${task.days_remaining}일 남음)\n**상태**: ${statusEmoji} ${task.status}`,
        inline: false
      });
    }

    await this.sendToDiscord(embed, true);
  }

  // 일일 요약 알림
  async sendDailySummary() {
    const today = new Date();
    const upcoming = this.parser.getUpcomingDeadlines(3);
    const overdue = this.getOverdueTasks();

    const embed = {
      title: `📊 ${today.toLocaleDateString('ko-KR')} 일일 요약`,
      color: 0x4ECDC4,
      fields: [
        {
          name: "🔥 긴급 (3일 이내)",
          value: upcoming.filter(t => t.days_remaining <= 3).length + "개",
          inline: true
        },
        {
          name: "⚠️ 지연",
          value: overdue.length + "개",
          inline: true
        },
        {
          name: "📈 진행률",
          value: this.getProgressSummary(),
          inline: true
        }
      ],
      timestamp: new Date().toISOString()
    };

    await this.sendToDiscord(embed, true);
  }

  // 지연된 작업 찾기
  getOverdueTasks() {
    const overdue = [];
    const today = new Date();

    for (const team of this.parser.schedule.teams) {
      for (const task of team.tasks) {
        const endDate = new Date(task.end_date);
        if (endDate < today && task.status !== 'completed') {
          overdue.push({
            ...task,
            team: team.name,
            days_overdue: Math.ceil((today - endDate) / (24 * 60 * 60 * 1000))
          });
        }
      }
    }

    return overdue;
  }

  // 진행률 요약
  getProgressSummary() {
    let total = 0;
    let completed = 0;

    for (const team of this.parser.schedule.teams) {
      for (const task of team.tasks) {
        total++;
        if (task.status === 'completed') completed++;
      }
    }

    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return `${completed}/${total} (${percentage}%)`;
  }

  // 특정 작업 완료 알림
  async notifyTaskCompletion(teamName, taskTitle) {
    const embed = {
      title: "✅ 작업 완료 알림",
      description: `**${teamName}**에서 **${taskTitle}** 작업이 완료되었습니다!`,
      color: 0x2ECC71,
      timestamp: new Date().toISOString(),
      footer: {
        text: "훌륭한 작업이었습니다! 👏"
      }
    };

    await this.sendToDiscord(embed, true);
  }

  // 위험 작업 알림 (마감 1일 전)
  async sendUrgentAlert() {
    const urgent = this.parser.getUpcomingDeadlines(1);
    
    if (urgent.length > 0) {
      const message = `🚨 **긴급 알림** 🚨\n\n` +
        urgent.map(task => 
          `**${task.team}** - ${task.title}\n` +
          `⏰ 마감: ${task.end_date} (${task.days_remaining}일 남음!)`
        ).join('\n\n');

      await this.sendToDiscord(message);
    }
  }

  // 마지막 체크 날짜 저장/로드
  saveLastCheckDate() {
    const fs = require('fs');
    const data = { lastCheck: new Date().toISOString() };
    fs.writeFileSync('.last-check', JSON.stringify(data));
  }

  loadLastCheckDate() {
    const fs = require('fs');
    try {
      const data = fs.readFileSync('.last-check', 'utf8');
      return new Date(JSON.parse(data).lastCheck);
    } catch {
      return new Date();
    }
  }

  // 자동 알림 실행 (cron job용)
  async runAutomaticNotifications() {
    console.log('🔄 자동 알림 시스템 시작...');
    
    // 매일 오전 9시에 일일 요약
    await this.sendDailySummary();
    
    // 매일 오후 6시에 마감일 알림
    await this.sendDeadlineNotification();
    
    // 매시간 긴급 알림 체크
    await this.sendUrgentAlert();
    
    this.saveLastCheckDate();
    console.log('✅ 자동 알림 시스템 완료');
  }
}

module.exports = NotificationSystem;

