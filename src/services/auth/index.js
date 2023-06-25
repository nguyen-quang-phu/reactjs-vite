import http from 'configs/http';

export function login(data) {
  return http.post('/public/auth/login', data);
}
