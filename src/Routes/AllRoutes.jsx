import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Login from "../pages/Authentication/Login"
import Register from "../pages/Authentication/Register"
const AllRoutes = () => {
  return (
    <Routes>
      {/* define your paths here  */}
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default AllRoutes;
