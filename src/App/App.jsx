import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import SeniorPage from 'pages/Senior';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
        path='/seniors'
        element={<SeniorPage />}
      />
    </Routes>
  );
}

export default App;
