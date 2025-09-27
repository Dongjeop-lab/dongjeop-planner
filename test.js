
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const WEBHOOK_URL = "https://discord.com/api/webhooks/1419487815267389570/ZGjKYDwMmBYkm1LxK-0AveyTaoZQgofAW5NJNAIMQPy_jRe8WBXAJGqc9eHzp6j1uKpY";

async function sendToDiscord(message) {
  await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: message })
  });
}

// 예시: 에러 발생 시
sendToDiscord(" 윌리엄 바보!");


