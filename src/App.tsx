// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./layouts/AppLayout";
// import './App.css';
// import LandingPage from "./pages/LandingPage";
// import HomePage from "./pages/HomePage";
// import Cart from "./pages/Cart";
// import OrderHistory from "./pages/OrderHistory";
// import Messages from "./pages/Messages";
// import Gifts from "./pages/Gifts";
// import Settings from "./pages/Settings";
// import Logout from "./pages/Logout";
import Login from "./pages/LoginPage";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     {/*  Authenticated routes */}
    //     <Route element={<Layout />}>
    //     <Route path="/HomePage" element={<HomePage />} />
    //       <Route path="/Gifts" element={<Gifts />} /> 
    //        <Route path="/Messages" element={<Messages />} />
    //        <Route path="/Cart" element={<Cart />} />
    //        <Route path="/OrderHistory" element={<OrderHistory />} />
    //        <Route path="/Settings" element={<Settings />} />
    //        <Route path="/Logout" element={<Logout />} />
    //     </Route>

    //     {/* Landing Page Routes  */}
    //       <Route path="/" element={<LandingPage />} />
    //     {/* <Route path="/login" element={<Login />} /> */}
    //   </Routes>
    // </Router>
    <Login />
  );
}

export default App;
