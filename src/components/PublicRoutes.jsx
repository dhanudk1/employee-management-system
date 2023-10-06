import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const loggedin = JSON.parse(localStorage.getItem("loggedin"));
  return loggedin ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
