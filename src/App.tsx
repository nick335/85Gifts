import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/AppLayout";
import './App.css';
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import OrderHistory from "./pages/OrderHistory";
import Messages from "./pages/Messages";
import Gifts from "./pages/Gifts";
import Login from "./pages/LoginPage";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/AdminLogin";
import AdminReset from "./pages/AdminReset";
import CustomerResetPassword from "./pages/CustomerResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import ErrorPage from "./pages/ErrorPage";

// Protected Route Wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const authToken = localStorage.getItem("authToken");
  return authToken ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Authenticated Routes (Require Login) */}
        <Route element={<Layout />}>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Gifts" element={<Gifts />} />
          <Route path="/Messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/OrderHistory" element={<ProtectedRoute><OrderHistory /></ProtectedRoute>} />
          <Route path="/Settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        </Route>

        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/VerifyEmail" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<CustomerResetPassword />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/reset" element={<AdminReset />} />

        {/* Catch-all route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
