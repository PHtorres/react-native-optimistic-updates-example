import {IProjectRepository} from '../model/projects/contracts/project-repository';
import {TCreateProjectParams} from '../model/projects/types/create-project-params';
import {TProject} from '../model/projects/types/project';
import {IHttpClient} from './contracts/http-client';
import {endpoints} from './endpoints';

export class ProjectsRepository implements IProjectRepository {
  constructor(private httpClient: IHttpClient) {}

  getProject = async (projectId: string) => {
    const response = await this.httpClient.sendRequest<TProject | undefined>({
      endpoint: endpoints.getProject(projectId),
      method: 'get',
    });
    return response;
  };

  getProjects = async () => {
    const response = await this.httpClient.sendRequest<TProject[] | undefined>({
      endpoint: endpoints.getProjects,
      method: 'get',
    });
    return response;
  };

  createProject = async (data: TCreateProjectParams) => {
    const response = await this.httpClient.sendRequest<TProject | undefined, TCreateProjectParams>({
      endpoint: endpoints.createProject,
      method: 'post',
      body: data,
    });
    return response;
  };
}
