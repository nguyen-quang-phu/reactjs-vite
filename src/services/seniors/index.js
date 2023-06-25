import http from 'configs/http';

export function getSeniors() {
  return http.get('/seniors');
}
