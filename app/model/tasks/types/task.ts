import {TDue} from './due';

export type TTask = {
  creator_id: string;
  created_at: string;
  assignee_id: string | null;
  assigner_id: string | null;
  comment_count: number;
  is_completed: boolean;
  content: string;
  description: string | null;
  due: TDue;
  duration: string | null;
  id: string;
  labels: string[];
  order: number;
  priority: number;
  project_id: string;
  section_id: string;
  parent_id: string;
  url: string;
};
