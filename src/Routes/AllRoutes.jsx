import React from "react";
import { Route, Routes } from "react-router-dom";

import Accessories from "../pages/accessories/Accessories";
import AllAccessoriesProducts from "../pages/accessories/AllAccessoriesProducts";

import AdminAccePage from "../pages/Admin_pages/AdminAccePage";
import AdminDashboardPage from "../pages/Admin_pages/AdminDashboardPage";
import AdminMenPage from "../pages/Admin_pages/AdminMenPage";
import AdminUserPage from "../pages/Admin_pages/AdminUserPage";
import AdminWomenPage from "../pages/Admin_pages/AdminWomenPage";

import Index from "../pages/Index";

import ProductDetails from "../pages/SignleProduct/ProductDetails";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Signup from "../pages/Authentication/Signup";
import Cart from "../pages/Cart/Cart";
import Payment from '../pages/Cart/Payment'

import Menspage from "../pages/Menspage/Menspage";

import Thankyou from '../pages/Cart/Thankyou';

const AllRoutes = () => {
  return (
    <Routes>
      {/* define your paths here  */}
      <Route path="/" element={<Index />} />
      <Route path="/product/:id/details" element={<ProductDetails />} />

      <Route path="/admin-men" element={<AdminMenPage/>} />
      <Route path="/admin-women" element={<AdminWomenPage/>} />
      <Route path="/admin-accessories" element={<AdminAccePage/>} />
      <Route path="/admin-users" element={<AdminUserPage/>} />
      <Route path="/admin-dashboard" element={<AdminDashboardPage/>} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment/>}/>

      <Route path="/mens" element={<Menspage/>}/>
      <Route path="/thankyou" element={<Thankyou/>}/>
      
      <Route path="/accessories" element={<Accessories />}></Route>
      <Route
        path="/accessories/products"
        element={<AllAccessoriesProducts />}
      ></Route>

      <Route path="/admin-men" element={<AdminMenPage />} />
      <Route path="/admin-women" element={<AdminWomenPage />} />
      <Route path="/admin-accessories" element={<AdminAccePage />} />
      <Route path="/admin-users" element={<AdminUserPage />} />
      <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default AllRoutes;
