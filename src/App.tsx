import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/AppLayout";
import './App.css';
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import OrderHistory from "./pages/OrderHistory";
import GiftCuration from "./pages/GiftCuration.tsx";
import Gifts from "./pages/Gifts";
import GiftDetail from "./pages/GiftCard";
import Login from "./pages/LoginPage";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/admin/AdminLogin.tsx";
import AdminReset from "./pages/admin/AdminReset.tsx";
import CustomerResetPassword from "./pages/CustomerResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import AdminDashBoard from "./pages/admin/AdminDashBoard.tsx"
import AdminLayout from "./layouts/AdminLayout";
import Transactions from "./pages/admin/Transactions.tsx";
import Users from "./pages/admin/Users.tsx";
import OrdersTab from "./pages/admin/AdminOrders.tsx";
import AdminGiftsPage from "./pages/admin/VeiwAllGifts.tsx";
//import { ErrorBoundary } from "react-error-boundary"
//import ErrorBoundaryUi from "../components/ErrorBoundary.tsx"
// import Navbar from "../components/Navbar.tsx"
// import NotFound from "../components/NotFound.tsx"
// import PublicLayout from "./layouts/PublicLayout.tsx"
import ErrorPage from "./pages/ErrorPage";
import Invoice from "./pages/ViewInvoice";
import Orders from "./pages/Orders";
import { Toaster } from "sonner";

// Protected Route Wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const authToken = localStorage.getItem("authToken");
  return authToken ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <>
    <Router>
       <Routes>
         {/* Authenticated Routes (Require Login) */}
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Gifts" element={<Gifts />} />
        <Route path="/gift/:_id" element={<GiftDetail />} />
        <Route path="/GiftCuration" element={<GiftCuration />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Invoice/:invoiceNumber" element={<Invoice />} />
        <Route path="/OrderHistory" element={<OrderHistory />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Settings" element={<Settings />} />
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
          


        {/* Admin Layout */}
        <Route element={<AdminLayout />}>
    <Route path="/adminpage" element={<AdminDashBoard />} />
    <Route path="/users" element={<Users />} />
    <Route path="/orders" element={<OrdersTab />} />
    <Route path="/admingiftspage" element={<AdminGiftsPage />} />
    <Route path="/transactions" element={<Transactions />} />
    </Route>


          {/* Catch-all route */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Toaster  position="top-center" richColors/>
    </>
  );
 
}

export default App;

