const NotificationSystem = require('./notification-system');
const ScheduleParser = require('./schedule-parser');

async function testNotificationSystem() {
  console.log('🧪 알림 시스템 테스트 시작...\n');

  // 1. 일정 파싱 테스트
  console.log('1️⃣ 일정 파싱 테스트');
  const parser = new ScheduleParser('./plan.txt');
  console.log(`📊 총 ${parser.schedule.teams.length}개 팀 발견`);
  
  for (const team of parser.schedule.teams) {
    console.log(`   - ${team.name}: ${team.tasks.length}개 작업`);
  }
  
  // JSON으로 저장
  parser.saveAsJSON('./schedule.json');
  console.log('✅ 일정이 schedule.json에 저장되었습니다\n');

  // 2. 마감일 임박 작업 확인
  console.log('2️⃣ 마감일 임박 작업 확인');
  const upcoming = parser.getUpcomingDeadlines(30); // 30일 내
  console.log(`📅 30일 내 마감 예정: ${upcoming.length}개 작업`);
  
  upcoming.slice(0, 5).forEach(task => {
    console.log(`   - ${task.team}: ${task.title} (${task.days_remaining}일 남음)`);
  });
  console.log('');

  // 3. 알림 시스템 초기화
  console.log('3️⃣ 알림 시스템 테스트');
  const notifier = new NotificationSystem('./plan.txt');
  
  // 테스트 알림 전송
  await notifier.sendToDiscord("🧪 **테스트 알림**\n\n프로젝트 플래너 알림 시스템이 정상 작동 중입니다!");
  
  // 마감일 알림 테스트
  await notifier.sendDeadlineNotification();
  
  // 일일 요약 테스트
  await notifier.sendDailySummary();
  
  console.log('✅ 모든 테스트 완료!');
}

// 실행
testNotificationSystem().catch(console.error);

