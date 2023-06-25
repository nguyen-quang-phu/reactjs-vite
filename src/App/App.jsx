import { Route, Routes } from 'react-router-dom';

import { AuthRoute } from 'containers/AuthRoute';
import { HomePage, LoginPage, SeniorPage } from 'pages';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route
          index
          element={
            <AuthRoute>
              <HomePage />
            </AuthRoute>
          }
        />

        <Route
          path='seniors'
          element={
            <AuthRoute>
              <SeniorPage />
            </AuthRoute>
          }
        />
      </Route>
      <Route
        path='/login'
        element={<LoginPage />}
      />
    </Routes>
  );
}

export default App;
