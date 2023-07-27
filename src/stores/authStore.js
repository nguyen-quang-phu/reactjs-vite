import { create } from 'zustand';

const defaultState = {
  token: null,
  error: null,
  loading: false,
};

const token = localStorage.getItem('authToken');
const initialState = {
  ...defaultState,
  token,
  isAuthenticated: !!token,
};

export const useAuthStore = create((set) => ({
  ...initialState,
  setToken: async ({ token }) => {
    try {
      localStorage.setItem('authToken', token);
      set(() => ({ token, isAuthenticated: true }));
    } catch (error) {
      set(() => ({ error }));
    }
  },
  logout: () => {
    localStorage.removeItem('authToken');
    set(() => ({ ...defaultState, isAuthenticated: false }));
  },
}));
