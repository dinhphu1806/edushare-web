import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Courses from "../pages/Courses";
import Contact from "../pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route exact index path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
