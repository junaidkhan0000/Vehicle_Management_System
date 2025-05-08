import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import TruckListing from "../../pages/TruckListing";
import TruckDetails from "../../pages/TruckDetails";
import Blog from "../../pages/Blog";
import BlogDetails from "../../pages/BlogDetails";
import LoginRegister from "../../pages/LoginRegister";
import Contact from "../../pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Truck" element={<TruckListing />} />
      <Route path="/Truck/:slug" element={<TruckDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<LoginRegister />} />
    </Routes>
  );
};

export default Routers;
