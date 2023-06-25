import { shallow } from 'zustand/shallow';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuthStore } from 'stores';

export function AuthRoute({ children }) {
  const location = useLocation();
  const { isAuthenticated } = useAuthStore(
    (state) => ({
      isAuthenticated: state.isAuthenticated,
    }),
    shallow,
  );

  if (!isAuthenticated) {
    return (
      <Navigate
        to={`/login?redirect=${location.pathname}`}
        replace
      />
    );
  }

  return children;
}
