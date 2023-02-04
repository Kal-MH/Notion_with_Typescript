import { getAxiosAuthApi, getAxiosDefaultApi } from './api';

export const getUserList = async () => {
  const defaultInstance = getAxiosDefaultApi({ method: 'get' });

  const { data } = await defaultInstance({
    url: '/users/get-users',
  });

  return data;
};

export const checkCurrentUserIsAuth = async () => {
  const authInstance = getAxiosAuthApi({ method: 'get' });

  const { data } = await authInstance({
    url: '/auth-user',
  });

  return data;
};
