import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/user/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import SendEmail from "./pages/user/SendEmail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/user/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/send-email"
          element={
            <ProtectedRoute>
              <SendEmail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


