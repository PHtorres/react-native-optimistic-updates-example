import axios from 'axios';
import {TODOIST_API_URL, TODOIST_API_TOKEN} from '@env';
import {IHttpClient, TSendRequestParams} from '../../data/contracts/http-client';

const todoistApi = axios.create({
  baseURL: TODOIST_API_URL,
  headers: {
    Authorization: `Bearer ${TODOIST_API_TOKEN}`,
  },
});

export class AxiosHttpClient implements IHttpClient {
  constructor() {}

  sendRequest = async <TResponse, TBody = string>({
    endpoint,
    method,
    body,
    headers,
    params,
  }: TSendRequestParams<TBody>) => {
    const response = await todoistApi.request<TResponse>({
      url: endpoint,
      method,
      data: body,
      params,
      headers,
    });
    return response?.data;
  };

  config = (baseUrl: string, headers?: Record<string, string>) => {
    todoistApi.defaults.baseURL = baseUrl;
    if (headers) {
      todoistApi.defaults.headers.common = headers;
    }
  };
}
