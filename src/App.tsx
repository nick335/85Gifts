import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Logout from "./pages/Logout";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/AdminLogin";
import AdminReset from "./pages/AdminReset";
import CustomerResetPassword from "./pages/CustomerResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        {/*  Authenticated routes */}
        <Route element={<Layout />}>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Gifts" element={<Gifts />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/OrderHistory" element={<OrderHistory />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Logout" element={<Logout />} />
        </Route>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/VerifyEmail" element={<VerifyEmail />} />
        {/* Landing Page Routes  */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/admin/reset" element={<AdminReset />} />

        
        <Route path="/reset-password" element={<CustomerResetPassword />} />
        <Route path="*" element={<ErrorPage/>} />

      </Routes>
    </Router>
  );
}

export default App;
