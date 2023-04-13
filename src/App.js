import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ActivateLayout from "./Layouts/ActivateLayout/ActivateLayout";
import AuthLayout from './Layouts/AuthLayout/AuthLayout';
import ProfileLayout from './Layouts/ProfileLayout/ProfileLayout';
import ResetLayout from './Layouts/ResetLayout/ResetLayout';

function App() {
  const isLoggedIn = false;
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

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
        path="/api/auth/activate/:activate_token"
        element={<ActivateLayout />}
      />
      </Routes>
    </Router>
  );
}

export default App;
