export interface IProject {
  id: string;
  name: string;
  comment_count: number;
  color: string;
  is_shared: boolean;
  order: number;
  is_favorite: boolean;
  is_inbox_project: boolean;
  is_team_inbox: boolean;
  view_style: string;
  url: string;
  parent_id: null | string;
}

export interface IProjectColor {
  id: number;
  name: string;
  hex: string;
}

export interface ICreateProject {
  name: string;
  color: string;
}
