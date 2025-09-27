export interface Task {
  id: string;
  title: string;
  start_date: string;
  end_date: string;
  priority: 'low' | 'medium' | 'high';
  assignee: string;
  status: 'pending' | 'in_progress' | 'completed';
  notification_days: number[];
  team?: string;
}

export interface Team {
  name: string;
  period: string;
  tasks: Task[];
}

export interface ScheduleData {
  teams: Team[];
}
