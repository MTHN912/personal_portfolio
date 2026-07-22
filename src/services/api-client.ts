

import axios from 'axios';
import { APP_CONFIG } from '@/shared/constants';

const apiClient = axios.create({
  baseURL: APP_CONFIG.api.baseUrl,
  timeout: APP_CONFIG.api.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {



    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {

    console.error('API Error:', error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
