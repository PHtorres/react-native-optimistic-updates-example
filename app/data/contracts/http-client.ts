type THttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export type TSendRequestParams<TBody = string> = {
  endpoint: string;
  method: THttpMethod;
  headers?: Record<string, string>;
  params?: Record<string, string>;
  body?: TBody;
};

export interface IHttpClient {
  sendRequest: <TResponse, TBody = string>(params: TSendRequestParams<TBody>) => Promise<TResponse>;
  config: (baseUrl: string, headers?: Record<string, string>) => void;
}
