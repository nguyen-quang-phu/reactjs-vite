import { AuthService } from 'services';
import { create } from 'zustand';

const defaultState = {
  token: null,
  error: null,
  loading: false,
};

const token = await AuthService.token();
const initialState = {
  ...defaultState,
  token,
  isAuthenticated: !!token,
};

export const useAuthStore = create((set) => ({
  ...initialState,
  setToken: async ({ token }) => {
    try {
      if (token) AuthService.setToken(token);
      set(() => ({ token, isAuthenticated: true }));
    } catch (error) {
      set(() => ({ error }));
    }
  },
  logout: () => {
    AuthService.clearToken();
    set(() => ({ ...defaultState }));
  },
}));
