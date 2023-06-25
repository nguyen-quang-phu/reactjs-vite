import axios from 'axios';
import ENV from 'constants/env';
import { AuthService } from 'services/AuthServices';

AuthService.config({ storage: localStorage });
const http = axios.create({
  baseURL: ENV.API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

http.interceptors.response.use((response) => response);

http.interceptors.request.use((config) => config);

export default http;
