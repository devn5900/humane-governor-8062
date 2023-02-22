import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminAccePage from "../pages/Admin_pages/AdminAccePage";
import AdminDashboardPage from "../pages/Admin_pages/AdminDashboardPage";
import AdminMenPage from "../pages/Admin_pages/AdminMenPage";
import AdminUserPage from "../pages/Admin_pages/AdminUserPage";
import AdminWomenPage from "../pages/Admin_pages/AdminWomenPage";
import Index from "../pages/Index";
const AllRoutes = () => {
  return (
    <Routes>
      {/* define your paths here  */}
      <Route path="/" element={<Index />} />
      <Route path="admin-men" element={<AdminMenPage/>} />
      <Route path="admin-women" element={<AdminWomenPage/>} />
      <Route path="admin-accessories" element={<AdminAccePage/>} />
      <Route path="admin-users" element={<AdminUserPage/>} />
      <Route path="admin-dashboard" element={<AdminDashboardPage/>} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default AllRoutes;
