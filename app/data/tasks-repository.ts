import {ITasksRepository} from '../model/tasks/contracts/tasks-repository';
import {TCreateTaskParams} from '../model/tasks/types/create-task-params';
import {TTask} from '../model/tasks/types/task';
import {IHttpClient} from './contracts/http-client';
import {endpoints} from './endpoints';

export class TasksRepository implements ITasksRepository {
  constructor(private httpClient: IHttpClient) {}

  getActiveTasks = async (projectId: string) => {
    const response = await this.httpClient.sendRequest<TTask[] | undefined>({
      endpoint: endpoints.tasks,
      method: 'get',
      params: {
        project_id: projectId,
      },
    });
    return response;
  };

  createTask = async (data: TCreateTaskParams) => {
    const response = await this.httpClient.sendRequest<TTask | undefined, TCreateTaskParams>({
      endpoint: endpoints.tasks,
      method: 'post',
      body: data,
    });
    return response;
  };

  closeTask = async (taskId: string) => {
    await this.httpClient.sendRequest({
      endpoint: endpoints.closeTask(taskId),
      method: 'post',
    });
  };

  deleteTask = async (taskId: string) => {
    await this.httpClient.sendRequest({
      endpoint: endpoints.deleteTask(taskId),
      method: 'delete',
    });
  };
}
