# 🕐 자동 알림 설정 가이드

## Cron Job 설정

다음 명령어로 자동 알림을 설정할 수 있습니다:

### 1. 매일 오전 9시 - 일일 요약
```bash
0 9 * * * cd /Users/jhw/kakao/project-planner && npm run daily
```

### 2. 매일 오후 6시 - 마감일 알림
```bash
0 18 * * * cd /Users/jhw/kakao/project-planner && npm run deadline
```

### 3. 매시간 - 긴급 알림 체크
```bash
0 * * * * cd /Users/jhw/kakao/project-planner && npm run urgent
```

### 4. 매주 월요일 오전 10시 - 전체 일정 확인
```bash
0 10 * * 1 cd /Users/jhw/kakao/project-planner && npm run notify
```

## 수동 실행 명령어

```bash
# 일일 요약만 보기
npm run daily

# 마감일 알림만 보기
npm run deadline

# 긴급 알림만 보기
npm run urgent

# 전체 알림 시스템 실행
npm run notify

# 일정 파싱만 하기
npm run parse
```

## 환경변수 설정 (선택사항)

`.env` 파일을 만들어서 웹훅 URL을 안전하게 관리:

```bash
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...
```

## 알림 종류

1. **📊 일일 요약**: 진행률, 긴급 작업, 지연 작업 요약
2. **📅 마감일 알림**: 7일 내 마감 예정 작업 목록
3. **🚨 긴급 알림**: 1일 이내 마감 작업
4. **✅ 완료 알림**: 작업 완료 시 알림 (수동)

