import http from './api';

export const getUserList = async () => {
  //   const defaultInstance = getAxiosDefaultApi({ method: 'get' });
  //   const { data } = await defaultInstance({
  //     url: '/users/get-users',
  //   });
  //   return data;

  try {
    const { data } = await http.get({
      url: '/users/get-users',
      headers: {
        AGE: '20',
      },
    });

    return data;
  } catch (e) {
    console.error(e);
  }
};

export const checkCurrentUserIsAuth = async () => {
  //   const authInstance = getAxiosAuthApi({ method: 'get' });

  //   const { data } = await authInstance({
  //     url: '/auth-user',
  //   });

  try {
    const { data } = await http.get({
      url: '/auth-user',
    });

    return data;
  } catch (e) {
    console.error(e);
  }
};
