import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const loggedin = JSON.parse(localStorage.getItem("loggedin"));

  const logout = (e) => {
    e.preventDefault();
    navigate("/login");
    localStorage.clear();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-danger bg-danger">
      <div className="container">
        <NavLink className="navbar-brand" to="#">
          <i className="fa fa-university me-1"></i>
          User Data
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {loggedin ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/album">
                    Albums
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/comment">
                    Comments
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/photo">
                    Photos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/post">
                    Posts
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/todo">
                    Todos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user">
                    Users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login" onClick={logout}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
