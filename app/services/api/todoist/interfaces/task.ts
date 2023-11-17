export interface ITask {
  creator_id: string;
  created_at: string;
  assignee_id: string | null;
  assigner_id: string | null;
  comment_count: number;
  is_completed: boolean;
  content: string;
  description: string | null;
  due: IDue;
  duration: string | null;
  id: string;
  labels: string[];
  order: number;
  priority: number;
  project_id: string;
  section_id: string;
  parent_id: string;
  url: string;
}

export interface IDue {
  date: string;
  is_recurring: boolean;
  datetime: string;
  string: string;
  timezone: string;
}

export interface ICreateTask {
  content: string;
  project_id: string;
  order: number;
}
