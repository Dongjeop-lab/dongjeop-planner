import { ScheduleData } from '../types';

export const scheduleData: ScheduleData = {
    teams: [
        {
            name: "FE팀",
            period: "8/25 ~ 10/15 (7주)",
            tasks: [
                {
                    id: "fe_001",
                    title: "가설 검증 인터뷰 계획",
                    start_date: "2025-08-25",
                    end_date: "2025-08-31",
                    priority: "low",
                    assignee: "FE팀",
                    status: "completed",
                    notification_days: [1]
                },
                {
                    id: "fe_002",
                    title: "가설 검증 인터뷰",
                    start_date: "2025-08-25",
                    end_date: "2025-09-07",
                    priority: "low",
                    assignee: "FE팀",
                    status: "completed",
                    notification_days: [1]
                },
                {
                    id: "fe_007",
                    title: "A안 개발",
                    start_date: "2025-10-04",
                    end_date: "2025-10-09",
                    priority: "high",
                    assignee: "FE팀",
                    status: "pending",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "fe_008",
                    title: "B안 개발",
                    start_date: "2025-09-16",
                    end_date: "2025-09-30",
                    priority: "high",
                    assignee: "FE팀",
                    status: "completed",
                    notification_days: [1, 3, 7]
                },
            ]
        },
        {
            name: "UXUI팀",
            period: "8/25 ~ 10/15 (7주)",
            tasks: [
                {
                    id: "ux_001",
                    title: "가설 검증 인터뷰 계획",
                    start_date: "2025-08-25",
                    end_date: "2025-08-31",
                    priority: "low",
                    assignee: "UXUI팀",
                    status: "completed",
                    notification_days: [1]
                },
                {
                    id: "ux_002",
                    title: "가설 검증 인터뷰",
                    start_date: "2025-08-25",
                    end_date: "2025-09-07",
                    priority: "low",
                    assignee: "UXUI팀",
                    status: "completed",
                    notification_days: [1]
                },
                {
                    id: "ux_004",
                    title: "B안 Hifi 디자인",
                    start_date: "2025-09-11",
                    end_date: "2025-09-15",
                    priority: "high",
                    assignee: "UXUI팀",
                    status: "completed",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "ux_007",
                    title: "A안 디자인 진행 + B안 디자인",
                    start_date: "2025-09-24",
                    end_date: "2025-09-30",
                    priority: "high",
                    assignee: "UXUI팀",
                    status: "completed",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "ux_008",
                    title: "B안 인터뷰 진행",
                    start_date: "2025-10-01",
                    end_date: "2025-10-03",
                    priority: "medium",
                    assignee: "UXUI팀",
                    status: "pending",
                    notification_days: [1, 3]
                },
            ]
        },
        {
            name: "PM팀",
            period: "7/21 ~ 10/15 (12주)",
            tasks: [
                {
                    id: "pm_001",
                    title: "프로젝트 킥오프",
                    start_date: "2025-07-21",
                    end_date: "2025-08-10",
                    priority: "high",
                    assignee: "PM팀",
                    status: "completed",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "pm_002",
                    title: "방향성 정렬",
                    start_date: "2025-08-11",
                    end_date: "2025-08-24",
                    priority: "high",
                    assignee: "PM팀",
                    status: "completed",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "pm_003",
                    title: "Service_v1 기획 완료",
                    start_date: "2025-08-24",
                    end_date: "2025-09-07",
                    priority: "high",
                    assignee: "PM팀",
                    status: "completed",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "pm_004",
                    title: "캠페인 기획 완료",
                    start_date: "2025-09-08",
                    end_date: "2025-09-21",
                    priority: "medium",
                    assignee: "PM팀",
                    status: "completed",
                    notification_days: [1, 3]
                },
                {
                    id: "pm_005",
                    title: "중간 발표 준비",
                    start_date: "2025-09-23",
                    end_date: "2025-09-23",
                    priority: "high",
                    assignee: "PM팀",
                    status: "completed",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "pm_006",
                    title: "캠페인 사전협의",
                    start_date: "2025-09-22",
                    end_date: "2025-09-28",
                    priority: "medium",
                    assignee: "PM팀",
                    status: "pending",
                    notification_days: [1, 3]
                },
                {
                    id: "pm_009",
                    title: "Service_v2 기획 시작",
                    start_date: "2025-10-06",
                    end_date: "2025-10-06",
                    priority: "medium",
                    assignee: "PM팀",
                    status: "pending",
                    notification_days: [1, 3]
                },
                {
                    id: "pm_010",
                    title: "A안 기획",
                    start_date: "2025-09-21",
                    end_date: "2025-09-23",
                    priority: "high",
                    assignee: "PM팀",
                    status: "pending",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "pm_011",
                    title: "캠페인 준비",
                    start_date: "2025-09-29",
                    end_date: "2025-10-05",
                    priority: "high",
                    assignee: "PM팀",
                    status: "pending",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "pm_013",
                    title: "Service_v1 인터뷰",
                    start_date: "2025-10-27",
                    end_date: "2025-11-02",
                    priority: "high",
                    assignee: "PM팀",
                    status: "pending",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "pm_014",
                    title: "추가 방향성 논의",
                    start_date: "2025-10-15",
                    end_date: "2025-10-15",
                    priority: "high",
                    assignee: "PM팀",
                    status: "pending",
                    notification_days: [1, 3, 7]
                }
            ]
        },
        {
            name: "AIML팀",
            period: "8/11 ~ 10/15 (9주)",
            tasks: [
                {
                    id: "ai_001",
                    title: "최소 맥락 정보 정의",
                    start_date: "2025-08-11",
                    end_date: "2025-08-24",
                    priority: "medium",
                    assignee: "AIML팀",
                    status: "completed",
                    notification_days: [1, 3]
                },
                {
                    id: "ai_002",
                    title: "Model_v1 아키텍처 설계",
                    start_date: "2025-08-25",
                    end_date: "2025-08-31",
                    priority: "high",
                    assignee: "AIML팀",
                    status: "completed",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "ai_003",
                    title: "OUTPUT 형태 확정",
                    start_date: "2025-09-01",
                    end_date: "2025-09-07",
                    priority: "high",
                    assignee: "AIML팀",
                    status: "completed",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "ai_004",
                    title: "Baseline 모델 구축",
                    start_date: "2025-09-08",
                    end_date: "2025-09-14",
                    priority: "high",
                    assignee: "AIML팀",
                    status: "completed",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "ai_005",
                    title: "1차 AI 개선안 구현",
                    start_date: "2025-09-15",
                    end_date: "2025-10-12",
                    priority: "high",
                    assignee: "AIML팀",
                    status: "completed",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "ai_006",
                    title: "1차 AI 개선안 학습 및 평가",
                    start_date: "2025-10-13",
                    end_date: "2025-10-19",
                    priority: "high",
                    assignee: "AIML팀",
                    status: "in_progress",
                    notification_days: [1, 3, 7]
                },
            ]
        },
        {
            name: "BE/DE팀 - 크롤링 & 라벨링",
            period: "8/25 ~ 10/12 (7주)",
            tasks: [
                {
                    id: "be_001",
                    title: "크롤링 시스템 설계 및 구현",
                    start_date: "2025-08-25",
                    end_date: "2025-08-31",
                    priority: "medium",
                    assignee: "BE/DE팀 - 크롤링 & 라벨링",
                    status: "completed",
                    notification_days: [1, 3]
                },
                {
                    id: "be_002",
                    title: "크롤링 데이터 수집 진행",
                    start_date: "2025-09-01",
                    end_date: "2025-09-21",
                    priority: "medium",
                    assignee: "BE/DE팀 - 크롤링 & 라벨링",
                    status: "completed",
                    notification_days: [1, 3]
                },
                {
                    id: "be_003",
                    title: "라벨링 작업 (1차)[3000/10000 장]",
                    start_date: "2025-09-29",
                    end_date: "2025-10-05",
                    priority: "high",
                    assignee: "BE/DE팀 - 크롤링 & 라벨링",
                    status: "in_progress",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "be_004",
                    title: "라벨링 작업 (2차)[6000/10000 장]",
                    start_date: "2025-10-06",
                    end_date: "2025-10-12",
                    priority: "high",
                    assignee: "BE/DE팀 - 크롤링 & 라벨링",
                    status: "pending",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "be_005",
                    title: "라벨링 작업 (3차)[10000/10000 장]",
                    start_date: "2025-10-13",
                    end_date: "2025-10-19",
                    priority: "high",
                    assignee: "BE/DE팀 - 크롤링 & 라벨링",
                    status: "pending",
                    notification_days: [1, 3, 7]
                }
            ]
        },
        {
            name: "BE/DE팀 - Service_v1 개발",
            period: "9/17 ~ 10/15 (4주)",
            tasks: [
                {
                    id: "be_service_001",
                    title: "B안 개발",
                    start_date: "2025-09-16",
                    end_date: "2025-09-28",
                    priority: "high",
                    assignee: "BE/DE팀 - Service_v1 개발",
                    status: "in_progress",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "be_service_002",
                    title: "A안 개발",
                    start_date: "2025-10-04",
                    end_date: "2025-10-07",
                    priority: "high",
                    assignee: "BE/DE팀 - Service_v1 개발",
                    status: "pending",
                    notification_days: [1, 3, 7]
                },
            ]
        },
        {
            name: "Service_v1",
            period: "9/28 ~ 10/12 (2주)",
            tasks: [
                {
                    id: "all_001",
                    title: "B안 개발 / 디자인 QA",
                    start_date: "2025-10-01",
                    end_date: "2025-10-03",
                    priority: "high",
                    assignee: "Service_v1",
                    status: "pending",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "all_002",
                    title: "A안 개발 / 디자인 QA",
                    start_date: "2025-10-10",
                    end_date: "2025-10-12",
                    priority: "high",
                    assignee: "Service_v1",
                    status: "pending",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "all_003",
                    title: "Service_v1 소프트 릴리즈 + 채널홍보",
                    start_date: "2025-10-15",
                    end_date: "2025-10-15",
                    priority: "high",
                    assignee: "Service_v1",
                    status: "pending",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "all_004",
                    title: "캠페인 실행 + 본격홍보",
                    start_date: "2025-10-20",
                    end_date: "2025-10-26",
                    priority: "high",
                    assignee: "Service_v1",
                    status: "pending",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "all_005",
                    title: "B안 개발 완료 (must+should)",
                    start_date: "2025-09-30",
                    end_date: "2025-09-30",
                    priority: "high",
                    assignee: "Service_v1",
                    status: "pending",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "all_006",
                    title: "A안 배포",
                    start_date: "2025-10-09",
                    end_date: "2025-10-09",
                    priority: "high",
                    assignee: "Service_v1",
                    status: "pending",
                    notification_days: [1, 3, 7]
                }
            ]
        },
        {
            name: "휴일",
            period: "10/3 ~ 10/9 (7일)",
            tasks: [
                {
                    id: "holiday_001",
                    title: "추석연휴",
                    start_date: "2025-10-03",
                    end_date: "2025-10-09",
                    priority: "low",
                    assignee: "휴일",
                    status: "pending",
                    notification_days: []
                }
            ]
        },
        {
            name: "Service_v2",
            period: "10/20 ~ 10/26 (1주)",
            tasks: [
                {
                    id: "service_v2_001",
                    title: "Service_v2 논의",
                    start_date: "2025-10-20",
                    end_date: "2025-10-26",
                    priority: "high",
                    assignee: "Service_v2",
                    status: "pending",
                    notification_days: [1, 3, 7]
                }
            ]
        },
        {
            name: "동접팀",
            period: "11/3 ~ 12/13 (6주)",
            tasks: [
                {
                    id: "dongjeop_001",
                    title: "Service_v1 최종 안정화·문서화 ex) api 명세, 코드 정리 등등",
                    start_date: "2025-10-20",
                    end_date: "2025-11-02",
                    priority: "high",
                    assignee: "동접팀",
                    status: "pending",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "dongjeop_002",
                    title: "최종 점검·성과 준비",
                    start_date: "2025-12-01",
                    end_date: "2025-12-07",
                    priority: "high",
                    assignee: "동접팀",
                    status: "pending",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "dongjeop_003",
                    title: "최종 성과 공유회",
                    start_date: "2025-12-08",
                    end_date: "2025-12-13",
                    priority: "high",
                    assignee: "동접팀",
                    status: "pending",
                    notification_days: [1, 3, 7]
                }
            ]
        }
    ]
};
