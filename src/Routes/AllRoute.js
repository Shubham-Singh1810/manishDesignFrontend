import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Auth from "../pages/Auth";
import MyProfile from "../pages/MyProfile";
import AdminAuth from "../pages/AdminAuth";
import Dashboard from "../adminProtectedPage/Dashboard";
import Services from "../pages/Services";
function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/myProfile" element={<MyProfile />} />
      <Route path="/admin_auth" element={<AdminAuth />} />
      <Route path="/admin_dashboard" element={<Dashboard />} />
      <Route path="/services/:category" element={<Services />} />
    </Routes>
  );
}

export default AllRoute;
