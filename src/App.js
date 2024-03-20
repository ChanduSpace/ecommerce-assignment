import React from "react";

import { Routes, Route, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Verify from "./components/Verify";
import Interested from "./components/Interested";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/interested" element={<Interested />} />
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
