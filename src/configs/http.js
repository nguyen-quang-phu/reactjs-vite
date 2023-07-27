import qs from 'qs';
import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

import ENV from 'constants/env';
import { useAuthStore } from 'stores';

const http = axios.create({
  baseURL: ENV.API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

http.interceptors.response.use(
  (response) => {
    if (
      response.data &&
      response.headers['content-type'] === 'application/json'
    ) {
      response.data = camelizeKeys(response.data);
    }
    return response;
  },
  async (error) => {
    const { config, response } = error;
    if (config?.url !== '/public/auth/login' && response?.status === 401) {
      useAuthStore.getState().logout();
    }
  },
);

http.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem('authToken');
    const newConfig = { ...config };
    newConfig.url = `${config.url}`;

    if (authToken) {
      newConfig.headers.Authorization = `Bearer ${authToken}`;
    }

    newConfig.paramsSerializer = (params) =>
      qs.stringify(params, {
        encode: false,
        arrayFormat: 'brackets',
      });

    if (newConfig.headers['Content-Type'] === 'multipart/form-data') {
      return newConfig;
    }

    if (config.params) {
      newConfig.params = decamelizeKeys(config.params);
    }

    if (config.data) {
      newConfig.data = decamelizeKeys(config.data);
    }

    return newConfig;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default http;
