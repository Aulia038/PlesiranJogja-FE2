import "../../../styles/login.css";
import { useState } from "react";
import logo from "../../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  // Handle form submission for login (Frontend only)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi 'Remember Me'
    const rememberMeChecked = document.getElementById("rememberMeCheckbox").checked;

    if (!rememberMeChecked) {
      setMsg("You must check 'Remember Me' to proceed.");
      return;
    }

    // Validasi email dan password kosong
    if (!email || !password) {
      setMsg("Please enter both email and password.");
      return;
    }

    // Simulasi login berhasil (tanpa backend)
    if (email === "user@example.com" && password === "password123") {
      setMsg("Login successful! Redirecting...");
      localStorage.setItem("userEmail", email);

      // Redirect ke halaman dashboard atau homepage
      navigate("/homepage");
    } else {
      setMsg("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="hero-login">
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
              <img src={logo} alt="Logo" className="logo-login" />
            </div>

            <div className="col-12 col-md-8 col-lg-6">
              <div className="form-login bg-white p-4 p-md-5 rounded-4 shadow-lg">
                <h2 className="login-text text-center mb-3">Welcome!</h2>
                <div className="login-switch bg-secondary rounded-5 d-flex justify-content-center align-items-center mb-3">
                  <Link className="btn btn-login active box-shadow-lg">Login</Link>
                  <Link className="btn btn-register" to="/register">
                    Register
                  </Link>
                </div>
                <p className="login-txt-1 text-center mb-3">Welcome Back! Please Login to Your Account</p>
                <form id="loginForm" onSubmit={handleSubmit}>
                  <div className="login-text4 position-relative">
                    <label htmlFor="email" className="form-label d-block mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control-login"
                      id="email"
                      placeholder="Enter your Email"
                      value={email}
                      onChange={({ target }) => setEmail(target.value)}
                      style={{
                        fontSize: "12px",
                        color: "#acacac",
                        fontWeight: "300",
                      }}
                    />
                  </div>
                  <div className="login-text4 position-relative">
                    <label htmlFor="password" className="form-label d-block mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control-login w-100"
                      id="password"
                      placeholder="Enter your Password"
                      value={password}
                      onChange={({ target }) => setPassword(target.value)}
                      style={{
                        fontSize: "12px",
                        color: "#acacac",
                        fontWeight: "300",
                      }}
                    />
                    <i className="las la-eye-slash position-absolute password-toggle-icon"></i>
                  </div>

                  <div className="d-flex justify-content-between">
                    <div>
                      <input type="checkbox" id="rememberMeCheckbox" />
                      <label className="text-decoration-none" htmlFor="rememberMeCheckbox">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn-submit">
                    Login
                  </button>
                </form>
                <div className="d-flex justify-content-center"></div>
                {msg && <div className="alert alert-danger mt-3">{msg}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
