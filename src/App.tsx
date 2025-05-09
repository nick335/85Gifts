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
import AdminLogin from "./pages/admin/AdminLogin.tsx";
import AdminReset from "./pages/admin/AdminReset.tsx";
import CustomerResetPassword from "./pages/CustomerResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import AdminDashBoard from "./pages/admin/AdminDashBoard.tsx"
import AdminLayout from "./layouts/AdminLayout";
import Transactions from "./pages/admin/Transactions.tsx";
import Users from "./pages/admin/Users.tsx";
import Orders from "./pages/admin/Orders.tsx";
import AdminGiftsPage from "./pages/admin/VeiwAllGifts.tsx";
import { ErrorBoundary } from "react-error-boundary"
import ErrorBoundaryUi from "../components/ErrorBoundary.tsx"
// import Navbar from "../components/Navbar.tsx"
import NotFound from "../components/NotFound.tsx"
import PublicLayout from "./layouts/PublicLayout.tsx"

function App() {
  return (
        

   <Router>
      <ErrorBoundary FallbackComponent={ErrorBoundaryUi}>
        <Routes>
          {/* Public Routes with Navbar */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<LandingPage />} /> 
          </Route>

            {/* login */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verifyemail" element={<VerifyEmail />} />
            <Route path="/reset-password" element={<CustomerResetPassword />} />


          {/* Authenticated User Routes */}
          <Route element={<Layout />}>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orderhistory" element={<OrderHistory />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </Route>

          {/* Admin Public Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/reset" element={<AdminReset />} />

          {/* Admin Authenticated Routes */}
          <Route element={<AdminLayout />}>
            <Route path="/adminpage" element={<AdminDashBoard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/admingiftspage" element={<AdminGiftsPage />} />
            <Route path="/transactions" element={<Transactions />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Router>     
  );
 
}

export default App;

