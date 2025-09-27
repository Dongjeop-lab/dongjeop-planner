# 동접 프로젝트 플래너

팀별 일정 관리 및 진행 상황 추적을 위한 React 기반 프로젝트 플래너입니다.

## 🚀 배포된 사이트

[GitHub Pages에서 확인하기](https://dongjeop-lab.github.io/dongjeop-planner)

## 📋 기능

- **팀별 일정 관리**: FE팀, UXUI팀, PM팀, AIML팀, BE/DE팀 등 팀별 작업 일정 관리
- **캘린더 뷰**: FullCalendar를 활용한 직관적인 일정 시각화
- **필터링 및 검색**: 팀, 우선순위, 상태별 필터링 및 작업 검색
- **실시간 통계**: 전체 작업, 완료된 작업, 마감 임박 작업 통계
- **반응형 디자인**: 모바일 및 태블릿 지원

## 🛠️ 기술 스택

- **Frontend**: React 18, TypeScript
- **UI Library**: FullCalendar
- **Styling**: CSS3
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages

## 📦 설치 및 실행

### 로컬 개발 환경

1. 저장소 클론
```bash
git clone https://github.com/Dongjeop-lab/dongjeop-planner.git
cd dongjeop-planner
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm start
```

4. 브라우저에서 `http://localhost:3000` 접속

### 빌드

```bash
npm run build
```

### 배포

```bash
npm run deploy
```

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── ProjectPlanner.tsx    # 메인 컴포넌트
│   └── ProjectPlanner.css    # 스타일
├── data/
│   └── scheduleData.ts       # 일정 데이터
├── types/
│   └── index.ts              # TypeScript 타입 정의
├── App.tsx                   # 앱 진입점
└── index.tsx                 # React DOM 렌더링
```

## 🎨 팀별 색상

- **FE팀**: 빨강 (#FF6B6B)
- **UXUI팀**: 청록 (#4ECDC4)
- **PM팀**: 파랑 (#45B7D1)
- **AIML팀**: 연두 (#96CEB4)
- **BE/DE팀 - 크롤링 & 라벨링**: 노랑 (#F4D03F)
- **BE/DE팀 - Service_v1 개발**: 자주 (#DDA0DD)
- **Service_v1**: 회색 (#B0BEC5)

## 📝 데이터 구조

```typescript
interface Task {
  id: string;
  title: string;
  start_date: string;
  end_date: string;
  priority: 'low' | 'medium' | 'high';
  assignee: string;
  status: 'pending' | 'in_progress' | 'completed';
  notification_days: number[];
}
```

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 ISC 라이선스 하에 배포됩니다.

## 📞 문의

프로젝트 관련 문의사항이 있으시면 이슈를 생성해 주세요.