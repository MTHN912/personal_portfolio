// API client configuration using Axios

import axios from 'axios';
import { APP_CONFIG } from '@/shared/constants';

const apiClient = axios.create({
  baseURL: APP_CONFIG.api.baseUrl,
  timeout: APP_CONFIG.api.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Future: Add auth token here
    // const token = getAuthToken();
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Future: Handle global errors (401, 403, 500)
    console.error('API Error:', error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
