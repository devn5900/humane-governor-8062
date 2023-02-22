import React from "react";
import { Route, Routes } from "react-router-dom";
import Accessories from "../pages/accessories/Accessories";
import Index from "../pages/Index";

const AllRoutes = () => {
  return (
    <Routes>
      {/* define your paths here  */}
      <Route path="/" element={<Index />} />
      <Route path="/accessories" element={<Accessories/>}></Route>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default AllRoutes;
