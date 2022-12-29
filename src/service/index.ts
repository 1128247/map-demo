import axios, { AxiosInstance } from 'axios';
import { RequestConfig, RequestInterceptors } from './type';
import { BASE_URL, TIMEOUT } from './config';
import { localCacheInstance, CacheType } from '../utils/cache';

class Request {
  private instance: AxiosInstance;
  interceptors?: RequestInterceptors;
  constructor(config: RequestConfig) {
    //创建请求实例
    this.instance = axios.create(config);
    //取出RequestConfig中的实例
    this.instance.interceptors.request.use(config.interceptors?.requestInterceptor, config.interceptors?.requestInterceptorCatch);
    this.instance.interceptors.response.use(config.interceptors?.responseInterceptor, config.interceptors?.responseInterceptorCatch);
    //添加这个实例的所有请求的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return error;
      }
    );
    this.instance.interceptors.response.use(
      (response) => {
        //移除loading
        const data = response.data;
        if (data.returnCode === '-1001') {
          console.log('请求失败~, 错误信息');
        } else {
          return data;
        }
      },
      (error) => {
        return error;
      }
    );
  }
  request<T>(requesrConfig: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //单个请求的拦截器
      if (requesrConfig.interceptors?.requestInterceptor) {
        requesrConfig = requesrConfig.interceptors.requestInterceptor(requesrConfig);
      }
      this.instance
        ?.request<any, T>(requesrConfig)
        .then((response) => {
          if (requesrConfig.interceptors?.responseInterceptor) {
            response = requesrConfig.interceptors?.responseInterceptor(response);
          }
          resolve(response);
        })
        .catch((error) => {
          reject(error);
          return error;
        });
    });
  }
  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }
  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }
  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }
  patch<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'patch' });
  }
}

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCacheInstance.getCache('token', CacheType.LocalStorage);
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (err) => {
      return err;
    }
  }
});

export default request;
