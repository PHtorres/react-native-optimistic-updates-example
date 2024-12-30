import {TCreateProjectParams} from '../types/create-project-params';
import {TProject} from '../types/project';

export interface IProjectRepository {
  getProject: (projectId: string) => Promise<TProject | undefined>;
  getProjects: () => Promise<TProject[] | undefined>;
  createProject: (
    params: TCreateProjectParams,
  ) => Promise<TProject | undefined>;
}
