import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginuser = (e) => {
    e.preventDefault();
    if (name === "dk" && password === "111") {
      setError("");
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      setError("Wrong Username or Pass");
    }
  };

  const isDisabled = () => {
    return name === "" || password === "";
  };

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "calc(100vh - 152px)" }}
      >
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-0">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h4>Login</h4>
                {error && <p className="alert alert-danger py-2">{error}</p>}
                <form onSubmit={loginuser}>
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="password"
                    className="form-control mt-2"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="btn btn-danger mt-2"
                    disabled={isDisabled()}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
