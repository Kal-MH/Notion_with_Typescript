import axios, { AxiosRequestConfig } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;
const API_AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

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
