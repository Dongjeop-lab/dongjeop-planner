const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const WEBHOOK_URL = "https://discord.com/api/webhooks/1419899786844180513/MlRenJ3dbqbTEwZcVq5THkjhZyUlB54phomf1tSVoUGkiyoSUMCV_BDY-HdSsowKfIFa";

async function sendToDiscord(message) {
    await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: message })
    });
}

// 9월 4주차 (9/22~9/28) 기준 일주일간 해야 할 일들
const weeklyTasks = {
    urgent: [
        "🚨 **9월 23일 (내일!)**: PM팀 - 중간 발표 준비"
    ],
    currentWeek: [
        "**9월 22일~28일**: PM팀 - 캠페인 사전협의",
        "**9월 22일~28일**: AIML팀 - 1차 AI 개선안 학습 및 평가",
        "**9월 22일~28일**: BE/DE팀(크롤링) - 라벨링 작업 (1차)[3000/10000 장]",
        "**9월 21일~23일**: UXUI팀 - A안 기획",
        "**9월 24일~26일**: UXUI팀 - A안 디자인 진행",
        "**9월 17일~27일**: BE/DE팀(Service) - B안 개발"
    ],
    completed: [
        "✅ **완료**: BE/DE팀(크롤링) - 크롤링 시스템 설계 및 구현 (8/25~8/31)",
        "✅ **완료**: BE/DE팀(크롤링) - 크롤링 데이터 수집 진행 (9/1~9/21)",
        "✅ **완료**: AIML팀 - 1차 AI 개선안 구현 (9/15~9/21)",
        "✅ **완료**: FE팀 - Hifi 디자인 개발 (9/17~9/19)",
        "✅ **완료**: UXUI팀 - B안 Hifi 공유 (happy case) (9/16)",
        "✅ **완료**: UXUI팀 - A안 기획 및 고도화 (9/17~9/19)"
    ],
    nextWeek: [
        "**9월 28일~30일**: FE팀 - B안 개발 완료 (must+should)",
        "**9월 28일~30일**: FE팀 - [전체] B안 개발 / 디자인 QA",
        "**9월 28일~30일**: UXUI팀 - B안 인터뷰 진행",
        "**9월 28일~30일**: UXUI팀 - [전체] B안 개발 / 디자인 QA",
        "**9월 28일~30일**: BE/DE팀(Service) - [전체] B안 개발 / 디자인 QA",
        "**9월 29일~10/12**: [전체] A안 개발 / 디자인 QA (모든 팀)"
    ]
};

async function sendWeeklyNotification() {
    const today = new Date();
    const dateStr = today.toLocaleDateString('ko-KR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    });

    let message = `멍멍! 🐶 **${dateStr} 주간 업무 알림**이에요!\n\n`;
    
    message += `🚨 **급해요! 급해요!**\n`;
    weeklyTasks.urgent.forEach(task => {
        message += `• ${task}\n`;
    });
    
    message += `\n✅ **우리 팀들 대단해요!** (완료된 작업들)\n`;
    weeklyTasks.completed.forEach(task => {
        message += `• ${task}\n`;
    });
    
    message += `\n📋 **지금 열심히 하고 있어요** (9/22~9/28)\n`;
    weeklyTasks.currentWeek.forEach(task => {
        message += `• ${task}\n`;
    });
    
    message += `\n🚀 **다음 주에 시작할 거예요** (9/28~)\n`;
    weeklyTasks.nextWeek.forEach(task => {
        message += `• ${task}\n`;
    });
    
    message += `\n⚠️ **동접이가 걱정하는 것들**\n`;
    message += `• 🚨 내일(9/23) 중간 발표 준비 완전 급해요! 멍멍!\n`;
    message += `• 라벨링 작업 10,000장 중 3,000장 목표예요 (30%!)\n`;
    message += `• 9월 28일부터 모든 팀이 B안으로 바빠질 거예요!\n`;
    message += `• UXUI팀이 이번 주 제일 바빠요 (4개 작업!)\n`;
    
    message += `\n📊 **동접이의 진행률 체크**\n`;
    message += `• 총 11개 작업 중 6개 완료, 5개 진행중이에요!\n`;
    message += `• 곧 완료될 거예요: AI 학습 평가, 라벨링 1차, 캠페인 사전협의\n`;
    message += `• 곧 시작될 거예요: A안 기획, A안 디자인 진행\n\n`;
    
    message += `모든 팀 화이팅! 🐶✨`;

    await sendToDiscord(message);
    console.log("동접이가 주간 알림을 디스코드로 전송했어요!");
}

// 실행
sendWeeklyNotification().catch(console.error);
