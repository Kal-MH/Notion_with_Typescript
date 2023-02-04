import axios, { AxiosRequestConfig, Method } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;
const API_AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

const METHOD: Record<string, Method> = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  PUT: 'put',
};

const { GET, POST, DELETE, PUT } = METHOD;

//instance 따로
export const getAxiosDefaultApi = (config: AxiosRequestConfig) => {
  return axios.create({
    ...config,
    baseURL: API_BASE_URL,
  });
};

export const getAxiosAuthApi = (config: AxiosRequestConfig) => {
  return axios.create({
    ...config,
    baseURL: API_BASE_URL,
    headers: {
      Authorization: API_AUTH_TOKEN && `Bearer ${API_AUTH_TOKEN}`,
    },
  });
};

//공통 instance
const getDefaultInstance = (method: Method) => {
  const defaultInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      Authorization: API_AUTH_TOKEN && `Bearer ${API_AUTH_TOKEN}`,
    },
    method,
  });

  return defaultInstance;
};

export default {
  get: getDefaultInstance(GET),
  post: getDefaultInstance(POST),
  delete: getDefaultInstance(DELETE),
  put: getDefaultInstance(PUT),
};
