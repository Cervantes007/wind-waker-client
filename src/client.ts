import { AxiosInstance, AxiosRequestConfig, AxiosResponse, default as axiosHttp } from 'axios';

export class Client<ActionList = string> {
  axios: AxiosInstance;

  constructor(public config: AxiosRequestConfig) {
    this.axios = axiosHttp.create(config);
  }

  request = <T, R = AxiosResponse<T>>(
    action: ActionList & string,
    data: T,
    config: AxiosRequestConfig = {},
  ): Promise<R> => {
    const url = `/${action}`;
    let dataKey: 'data' | 'params' = 'data';
    const _config: AxiosRequestConfig = { method: 'POST', ...config, url };
    if (data) {
      switch (config.method) {
        case 'DELETE':
        case 'delete':
        case 'GET':
        case 'get':
          dataKey = 'params';
          break;
        default:
          dataKey = 'data';
          break;
      }
      _config[dataKey] = data;
    }

    return this.axios.request(_config);
  };
}
