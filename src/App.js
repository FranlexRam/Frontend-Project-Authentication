import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ActivateLayout from "./Layouts/ActivateLayout/ActivateLayout";
import AuthLayout from './Layouts/AuthLayout/AuthLayout';
import ProfileLayout from './Layouts/ProfileLayout/ProfileLayout';
import ResetLayout from './Layouts/ResetLayout/ResetLayout';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';

function App() {
  const {isLoggedIn} = useContext(AuthContext)

  return (
    <Router>
      <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <ProfileLayout /> : <AuthLayout />}
      />
      <Route
        path="/auth/reset-password/:token"
        element={<ResetLayout/>}
      />
      <Route
        path="/api/auth/activate/:activation_token"
        element={<ActivateLayout />}
      />
      </Routes>
    </Router>
  );
}

export default App;
