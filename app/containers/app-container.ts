import {ProjectsRepository} from '../data/project-repository';
import {TasksRepository} from '../data/tasks-repository';
import {AxiosHttpClient} from '../services/http-client/axios-http-client';

const axiosHttpClient = new AxiosHttpClient();

export const appContainer = {
  httpClient: axiosHttpClient,
  projectsRepository: new ProjectsRepository(axiosHttpClient),
  tasksRepository: new TasksRepository(axiosHttpClient),
};
