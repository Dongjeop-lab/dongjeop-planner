const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const WEBHOOK_URL = "https://discord.com/api/webhooks/1419487815267389570/ZGjKYDwMmBYkm1LxK-0AveyTaoZQgofAW5NJNAIMQPy_jRe8WBXAJGqc9eHzp6j1uKpY";

async function sendToDiscord(message) {
    await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: message })
    });
}

// 오늘 날짜의 특별한 작업들
const today = new Date();
const todayStr = today.toISOString().split('T')[0]; // YYYY-MM-DD 형식

const todayTasks = {
    "2025-09-22": [
        "🔴 AIML팀 - 1차 AI 개선안 학습 및 평가 시작",
        "🔴 BE/DE팀(크롤링) - 라벨링 작업 (1차)[3000/10000 장] 시작",
        "🟡 PM팀 - 캠페인 사전협의 시작"
    ],
    "2025-09-23": [
        "🚨 PM팀 - 중간 발표 준비 (긴급!)",
        "🔴 AIML팀 - 1차 AI 개선안 학습 및 평가 진행",
        "🔴 BE/DE팀(크롤링) - 라벨링 작업 (1차) 진행"
    ],
    "2025-09-24": [
        "🔴 UXUI팀 - A안 디자인 진행 시작",
        "🔴 AIML팀 - 1차 AI 개선안 학습 및 평가 진행",
        "🔴 BE/DE팀(크롤링) - 라벨링 작업 (1차) 진행"
    ],
    "2025-09-25": [
        "🔴 UXUI팀 - A안 디자인 진행",
        "🔴 AIML팀 - 1차 AI 개선안 학습 및 평가 진행",
        "🔴 BE/DE팀(크롤링) - 라벨링 작업 (1차) 진행"
    ],
    "2025-09-26": [
        "🔴 UXUI팀 - A안 디자인 진행 마감",
        "🔴 AIML팀 - 1차 AI 개선안 학습 및 평가 진행",
        "🔴 BE/DE팀(크롤링) - 라벨링 작업 (1차) 진행"
    ],
    "2025-09-27": [
        "🔴 AIML팀 - 1차 AI 개선안 학습 및 평가 마감 예정",
        "🔴 BE/DE팀(크롤링) - 라벨링 작업 (1차) 마감 예정",
        "🔴 BE/DE팀(Service) - B안 개발 마감 예정"
    ],
    "2025-09-28": [
        "🚀 FE팀 - B안 개발 완료 (must+should) 시작",
        "🚀 UXUI팀 - B안 인터뷰 진행 시작",
        "🚀 [전체] B안 개발 / 디자인 QA 시작"
    ]
};

async function sendDailyReminder() {
    const dateStr = today.toLocaleDateString('ko-KR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    });

    let message = `🌅 **${dateStr} 오늘의 업무**\n\n`;
    
    const tasks = todayTasks[todayStr];
    if (tasks && tasks.length > 0) {
        tasks.forEach(task => {
            message += `• ${task}\n`;
        });
    } else {
        message += `• 오늘은 특별한 마일스톤이 없습니다.\n`;
        message += `• 각 팀별 진행 중인 작업을 확인해주세요.\n`;
    }
    
    message += `\n📊 **프로젝트 진행 상황**\n`;
    message += `• ✅ 크롤링 시스템 완료 (8/25~8/31)\n`;
    message += `• ✅ 크롤링 데이터 수집 완료 (9/1~9/21)\n`;
    message += `• 🔄 AI 모델 고도화 단계\n`;
    message += `• 🔄 라벨링 데이터 준비 중\n`;
    message += `• 📋 B안 개발 준비 단계\n`;
    
    message += `\n💡 **오늘의 팁**: 중간 발표가 다가오고 있습니다. 준비 상황을 점검해보세요!`;

    await sendToDiscord(message);
    console.log(`${dateStr} 일일 알림이 디스코드로 전송되었습니다!`);
}

// 실행
sendDailyReminder().catch(console.error);
