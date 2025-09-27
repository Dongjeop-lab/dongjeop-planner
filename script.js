// 일정 데이터 (실제로는 서버에서 가져올 수 있음)
const scheduleData = {
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
                    end_date: "2025-10-07",
                    priority: "high",
                    assignee: "FE팀",
                    status: "pending",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "fe_008",
                    title: "B안 개발",
                    start_date: "2025-09-16",
                    end_date: "2025-09-27",
                    priority: "high",
                    assignee: "FE팀",
                    status: "in_progress",
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
                    title: "A안 디자인 진행",
                    start_date: "2025-09-24",
                    end_date: "2025-09-27",
                    priority: "high",
                    assignee: "UXUI팀",
                    status: "in_progress",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "ux_008",
                    title: "B안 인터뷰 진행",
                    start_date: "2025-09-29",
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
                    status: "pending",
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
                    end_date: "2025-09-27",
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
                    start_date: "2025-09-29",
                    end_date: "2025-10-03",
                    priority: "high",
                    assignee: "Service_v1",
                    status: "pending",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "all_002",
                    title: "A안 개발 / 디자인 QA",
                    start_date: "2025-10-09",
                    end_date: "2025-10-12",
                    priority: "high",
                    assignee: "Service_v1",
                    status: "pending",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "all_003",
                    title: "A안 소프트 릴리즈 + 채널홍보",
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
                    start_date: "2025-09-28",
                    end_date: "2025-09-28",
                    priority: "high",
                    assignee: "Service_v1",
                    status: "pending",
                    notification_days: [1, 3, 7]
                },
                {
                    id: "all_006",
                    title: "A안 배포",
                    start_date: "2025-10-08",
                    end_date: "2025-10-08",
                    priority: "high",
                    assignee: "Service_v1",
                    status: "pending",
                    notification_days: [1, 3, 7]
                }
            ]
        }
    ]
};

class ProjectPlanner {
    constructor() {
        this.currentYear = 2025;
        this.currentMonth = 8; // 9월 (0부터 시작)
        this.filteredTasks = this.getAllTasks();
        this.init();
    }

    init() {
        this.renderStats();
        this.renderTeams();
        this.renderCalendar();
        this.bindEvents();
    }

    getAllTasks() {
        const allTasks = [];
        scheduleData.teams.forEach(team => {
            team.tasks.forEach(task => {
                allTasks.push({
                    ...task,
                    team: team.name
                });
            });
        });
        return allTasks;
    }

    calculateTaskProgress(task, currentDateStr) {
        const startDate = new Date(task.start_date);
        const endDate = new Date(task.end_date);
        const currentDate = new Date(currentDateStr);
        
        const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
        const elapsedDays = (currentDate - startDate) / (1000 * 60 * 60 * 24);
        
        const progress = Math.max(0, Math.min(100, (elapsedDays / totalDays) * 100));
        return Math.round(progress);
    }

    renderStats() {
        const totalTasks = this.filteredTasks.length;
        const completedTasks = this.filteredTasks.filter(task => task.status === 'completed').length;
        const upcomingTasks = this.filteredTasks.filter(task => {
            const endDate = new Date(task.end_date);
            const today = new Date();
            const diffTime = endDate - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays <= 7 && task.status !== 'completed';
        }).length;

        document.getElementById('total-tasks').textContent = totalTasks;
        document.getElementById('completed-tasks').textContent = completedTasks;
        document.getElementById('upcoming-tasks').textContent = upcomingTasks;
    }

    renderTimeline() {
        const timeline = document.getElementById('timeline');
        timeline.innerHTML = '';

        // 최근 30일 내 작업들만 표시
        const recentTasks = this.filteredTasks.filter(task => {
            const endDate = new Date(task.end_date);
            const today = new Date();
            const diffTime = endDate - today;
            const diffDays = diffTime / (1000 * 60 * 60 * 24);
            return diffDays >= -7 && diffDays <= 30;
        }).sort((a, b) => new Date(a.start_date) - new Date(b.start_date));

        recentTasks.forEach(task => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            
            const endDate = new Date(task.end_date);
            const today = new Date();
            const diffTime = endDate - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            timelineItem.innerHTML = `
                <div class="timeline-content" onclick="projectPlanner.showTaskModal('${task.id}')">
                    <div class="timeline-date">${endDate.toLocaleDateString('ko-KR')}</div>
                    <div class="timeline-title">${task.title}</div>
                    <div class="timeline-team">${task.team} • ${diffDays > 0 ? `${diffDays}일 남음` : `${Math.abs(diffDays)}일 지연`}</div>
                </div>
            `;

            timeline.appendChild(timelineItem);
        });
    }

    renderTeams() {
        const teamsGrid = document.getElementById('teams-grid');
        teamsGrid.innerHTML = '';

        scheduleData.teams.forEach(team => {
            const teamTasks = this.filteredTasks.filter(task => task.team === team.name);
            const completedCount = teamTasks.filter(task => task.status === 'completed').length;
            const progress = teamTasks.length > 0 ? (completedCount / teamTasks.length) * 100 : 0;

            const teamCard = document.createElement('div');
            teamCard.className = 'team-card';

            teamCard.innerHTML = `
                <div class="team-header">
                    <div class="team-name">${team.name}</div>
                    <div class="team-progress">${completedCount}/${teamTasks.length}</div>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                <ul class="team-tasks">
                    ${teamTasks.map(task => `
                        <li class="team-task" onclick="projectPlanner.showTaskModal('${task.id}')">
                            <span class="task-priority priority-${task.priority}"></span>
                            ${task.title}
                            <span class="task-status status-${task.status}">${task.status}</span>
                        </li>
                    `).join('')}
                </ul>
            `;

            teamsGrid.appendChild(teamCard);
        });
    }

    renderCalendar() {
        const calendarEl = document.getElementById('fullcalendar');
        
        // FullCalendar 초기화
        this.calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            locale: 'ko',
            firstDay: 1, // 월요일로 시작 (0=일요일, 1=월요일)
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,listWeek'
            },
            height: 'auto',
            aspectRatio: 1.35,
            events: this.getCalendarEvents(),
            eventClick: (info) => {
                this.showTaskModal(info.event.id);
            },
            eventClassNames: (arg) => {
                const event = arg.event;
                const classes = [];
                
                // 팀별 클래스 추가
                const teamClass = this.getTeamClass(event.extendedProps.team);
                if (teamClass) classes.push(teamClass);
                
                // 우선순위별 클래스 추가
                const priorityClass = `priority-${event.extendedProps.priority}`;
                classes.push(priorityClass);
                
                return classes;
            },
            eventContent: (arg) => {
                const event = arg.event;
                
                return {
                    html: `
                        <div class="fc-event-content">
                            <div class="fc-event-title">${event.title}</div>
                        </div>
                    `
                };
            },
            dayMaxEvents: false,
            moreLinkClick: false,
            validRange: {
                start: '2025-08-01',
                end: '2025-11-30'
            }
        });

        this.calendar.render();
    }

    getCalendarEvents() {
        const events = [];
        
        this.filteredTasks.forEach(task => {
            // 시작일과 마감일이 같은 경우 (하루 작업)
            if (task.start_date === task.end_date) {
                events.push({
                    id: task.id,
                    title: task.title,
                    start: task.start_date,
                    allDay: true,
                    backgroundColor: this.getTeamColor(task.team),
                    borderColor: this.getTeamColor(task.team),
                    extendedProps: {
                        team: task.team,
                        priority: task.priority,
                        status: task.status,
                        assignee: task.assignee
                    }
                });
            } else {
                // 여러 날에 걸친 작업
                events.push({
                    id: task.id,
                    title: task.title,
                    start: task.start_date,
                    end: new Date(new Date(task.end_date).getTime() + 24 * 60 * 60 * 1000), // 마감일 다음날까지
                    allDay: true,
                    backgroundColor: this.getTeamColor(task.team),
                    borderColor: this.getTeamColor(task.team),
                    extendedProps: {
                        team: task.team,
                        priority: task.priority,
                        status: task.status,
                        assignee: task.assignee
                    }
                });
            }
        });

        return events;
    }

    getTeamClass(teamName) {
        const teamMap = {
            'FE팀': 'fe-team',
            'UXUI팀': 'uxui-team',
            'PM팀': 'pm-team',
            'AIML팀': 'aiml-team',
            'BE/DE팀 - 크롤링 & 라벨링': 'bede-crawling-team',
            'BE/DE팀 - Service_v1 개발': 'bede-service-team',
            'Service_v1': 'all-team'
        };
        return teamMap[teamName] || '';
    }

    getTeamColor(teamName) {
        const colorMap = {
            'FE팀': '#FF6B6B',           // 밝은 빨강
            'UXUI팀': '#4ECDC4',         // 청록색
            'PM팀': '#45B7D1',           // 하늘색
            'AIML팀': '#96CEB4',         // 연두색
            'BE/DE팀 - 크롤링 & 라벨링': '#F4D03F',  // 진한 노란색
            'BE/DE팀 - Service_v1 개발': '#DDA0DD',  // 자주색
            'Service_v1': '#B0BEC5'          // 연한 그레이
        };
        return colorMap[teamName] || '#95a5a6';
    }

    renderTasks() {
        const tasksList = document.getElementById('tasks-list');
        tasksList.innerHTML = '';

        this.filteredTasks.sort((a, b) => new Date(a.end_date) - new Date(b.end_date)).forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task-item';
            taskElement.onclick = () => this.showTaskModal(task.id);

            const endDate = new Date(task.end_date);
            const today = new Date();
            const diffTime = endDate - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            taskElement.innerHTML = `
                <div class="task-header">
                    <div class="task-title">${task.title}</div>
                    <span class="task-status status-${task.status}">${task.status}</span>
                </div>
                <div class="task-meta">
                    <span><i class="fas fa-users"></i> ${task.team}</span>
                    <span><i class="fas fa-calendar"></i> ${task.end_date}</span>
                    <span><i class="fas fa-clock"></i> ${diffDays > 0 ? `${diffDays}일 남음` : `${Math.abs(diffDays)}일 지연`}</span>
                    <span><i class="fas fa-flag priority-${task.priority}"></i> ${task.priority}</span>
                </div>
            `;

            tasksList.appendChild(taskElement);
        });
    }

    bindEvents() {
        // 검색
        document.getElementById('search-input').addEventListener('input', (e) => {
            this.filterTasks();
        });

        // 필터
        document.getElementById('team-filter').addEventListener('change', () => {
            this.filterTasks();
        });

        document.getElementById('priority-filter').addEventListener('change', () => {
            this.filterTasks();
        });

        document.getElementById('status-filter').addEventListener('change', () => {
            this.filterTasks();
        });

        // 모달 닫기
        document.getElementById('modal-close').addEventListener('click', () => {
            document.getElementById('task-modal').classList.remove('show');
        });

        // 모달 배경 클릭으로 닫기
        document.getElementById('task-modal').addEventListener('click', (e) => {
            if (e.target.id === 'task-modal') {
                document.getElementById('task-modal').classList.remove('show');
            }
        });

    }

    filterTasks() {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const teamFilter = document.getElementById('team-filter').value;
        const priorityFilter = document.getElementById('priority-filter').value;
        const statusFilter = document.getElementById('status-filter').value;

        this.filteredTasks = this.getAllTasks().filter(task => {
            const matchesSearch = task.title.toLowerCase().includes(searchTerm);
            const matchesTeam = !teamFilter || task.team === teamFilter;
            const matchesPriority = !priorityFilter || task.priority === priorityFilter;
            const matchesStatus = !statusFilter || task.status === statusFilter;

            return matchesSearch && matchesTeam && matchesPriority && matchesStatus;
        });

        this.renderStats();
        this.renderTeams();
        
        // FullCalendar 이벤트 업데이트
        if (this.calendar) {
            this.calendar.removeAllEvents();
            this.calendar.addEventSource(this.getCalendarEvents());
        }
    }

    showTaskModal(taskId) {
        const task = this.getAllTasks().find(t => t.id === taskId);
        if (!task) return;

        const endDate = new Date(task.end_date);
        const startDate = new Date(task.start_date);
        const today = new Date();
        const diffTime = endDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        document.getElementById('modal-title').textContent = task.title;
        document.getElementById('modal-body').innerHTML = `
            <div class="task-detail">
                <div class="detail-row">
                    <strong>팀:</strong> ${task.team}
                </div>
                <div class="detail-row">
                    <strong>시작일:</strong> ${startDate.toLocaleDateString('ko-KR')}
                </div>
                <div class="detail-row">
                    <strong>마감일:</strong> ${endDate.toLocaleDateString('ko-KR')}
                </div>
                <div class="detail-row">
                    <strong>남은 기간:</strong> ${diffDays > 0 ? `${diffDays}일 남음` : `${Math.abs(diffDays)}일 지연`}
                </div>
                <div class="detail-row">
                    <strong>우선순위:</strong> 
                    <span class="priority-badge priority-${task.priority}">${task.priority}</span>
                </div>
                <div class="detail-row">
                    <strong>상태:</strong> 
                    <span class="status-badge status-${task.status}">${task.status}</span>
                </div>
            </div>
        `;

        document.getElementById('task-modal').classList.add('show');
    }

    showDayTasks(dateStr, tasks) {
        if (tasks.length === 0) return;

        const date = new Date(dateStr);
        document.getElementById('modal-title').textContent = `${date.toLocaleDateString('ko-KR')} 일정`;
        
        document.getElementById('modal-body').innerHTML = `
            <div class="day-tasks-detail">
                ${tasks.map(task => `
                    <div class="day-task-item">
                        <div class="day-task-title">${task.title}</div>
                        <div class="day-task-meta">
                            <span class="day-task-team">${task.team}</span>
                            <span class="day-task-type">${task.start_date === dateStr ? '시작' : '마감'}</span>
                            <span class="day-task-priority priority-${task.priority}">${task.priority}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        document.getElementById('task-modal').classList.add('show');
    }
}

// 페이지 로드 시 초기화
let projectPlanner;
document.addEventListener('DOMContentLoaded', () => {
    projectPlanner = new ProjectPlanner();
});
