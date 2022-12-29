import { AxiosResponse, AxiosRequestConfig } from 'axios';

interface RequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (response: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>;
  showLadding?: boolean;
}

export { RequestInterceptors, RequestConfig };
