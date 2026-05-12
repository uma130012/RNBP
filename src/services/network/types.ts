import {Method} from 'axios';

export interface RequestParams {
  url: string;
  method?: Method;
  baseURL?: string;
  data?: any;
  isLoader?: boolean;
  isMultipart?: boolean;
}

export enum ContentType {
  multipart = 'multipart/form-data',
  regular = 'application/json',
}
