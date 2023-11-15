import {todoistApi} from '../api';
import {ENDPOINTS} from '../endpoints';
import {ICreateProject, IProject} from '../interfaces/project';

const createProject = async (data: ICreateProject) => {
  const response = await todoistApi.post<IProject | undefined>(
    ENDPOINTS.projects,
    data,
  );
  return response.data;
};

const getProjects = async () => {
  const response = await todoistApi.get<IProject[] | undefined>(
    ENDPOINTS.projects,
  );
  return response.data;
};

const getProject = async (projectId: string) => {
  const response = await todoistApi.get<IProject | undefined>(
    `${ENDPOINTS.projects}/${projectId}`,
  );
  return response.data;
};

export const projectsRequests = {
  createProject,
  getProjects,
  getProject,
};
