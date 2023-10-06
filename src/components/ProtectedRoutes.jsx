import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const loggedin = JSON.parse(localStorage.getItem("loggedin"));
  return loggedin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
