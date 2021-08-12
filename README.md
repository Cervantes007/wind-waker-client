![CI](https://github.com/cervantes007/wind-waker-client/workflows/CI/badge.svg)
![npm](https://img.shields.io/npm/v/wind-waker-client)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# wind-waker-client
Client side implementation for [Wind Waker](https://cervantes007.github.io/wind-waker/) Nodejs Framework.

this package is isomorphic, you can use on Server/Client side.
e.g
- Use it to communicate 2 `wind-waker` servers.
- Use it to consume your `wind-waker` server from `vue`, `react`, ... or any javascript client app.

## Getting Started

```typescript
import {Client} from 'wind-waker-client';

const client = new Client({ baseURL: 'http://localhost:4000' });

// request first parameter is the action name
const response = await client.request('hello');

// requesting with data, the default method is POST
const response = await client.request('hello', {name: 'Zelda'});

// change method to GET, notice the data don't change at all
const response = await client.request('hello', {name: 'Zelda'}, {method: 'GET'});
```

## Documentation

`wind-waker-client` is an abstraction layer on top of [Axios](https://github.com/axios/axios)

### Client

The Client class constructor get [AxiosRequestConfig](https://axios-http.com/docs/req_config) as argument to create a new axios instance for use the `request` method.

Definition:
```typescript
class Client {
  axios: AxiosInstance;

  constructor(public config: AxiosRequestConfig) {
    this.axios = axiosHttp.create(config);
  }
}
```

All axios configurations are supported.

### request Method

Definition:
```typescript
request(action: string, data: T, config: AxiosRequestConfig = {}): Promise; 
```

Definition with generics:
```typescript
request<T, R = AxiosResponse<T>>(action: string, data: T, config: AxiosRequestConfig = {}): Promise<R>; 
```

Visit [Axios Website](https://axios-http.com/), to more information about options and configurations

