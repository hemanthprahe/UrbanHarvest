import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Leaf } from "lucide-react";
import { loginStart, loginSuccess, loginFailure } from "../../store/slices/authSlice";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((s) => s.auth);

  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) return;

    dispatch(loginStart());
    setTimeout(() => {
      // if (form.email && form.password) {
      if (form.email === "admin@urbanharvest.com" && form.password === "admin123") {
        dispatch(loginSuccess({ name: "Hemanth", email: form.email, role: "Admin", avatar: "RK" }));
      //  dispatch(loginFailure("Please enter a valid email and password."));
        navigate("/dashboard");
      } else {
        dispatch(loginFailure("Invalid credentials. Try admin@urbanharvest.com / admin123"));
      }
    }, 900);
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-brand">
          <Leaf size={28} />
          <span>Urban Harvest</span>
        </div>
        <div className="login-left-content">
          <div className="login-stat"><span className="stat-num">2,847</span><span>Orders Today</span></div>
          <div className="login-stat"><span className="stat-num">₹94K</span><span>Revenue This Month</span></div>
          <div className="login-stat"><span className="stat-num">1,293</span><span>Active Customers</span></div>
        </div>
        <p className="login-tagline">Fresh food. Fast delivery.<br />Smart management.</p>
      </div>

      <div className="login-right">
        <form className="login-card fade-in" onSubmit={handleSubmit}>
          <div className="login-logo-mobile">
            <Leaf size={22} /> Urban Harvest
          </div>
          <h1>Welcome back</h1>
          <p className="login-sub">Sign in to your admin dashboard</p>

          {error && <div className="login-error">{error}</div>}

          <div className="field-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="admin@urbanharvest.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label>Password</label>
            <div className="pass-wrap">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button type="button" className="eye-btn" onClick={() => setShowPass(!showPass)}>
                {showPass ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
          </div>

          <div className="login-options">
            <label className="remember-label">
              <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange} />
              <span>Remember me</span>
            </label>
            <button type="button" className="forgot-btn">Forgot password?</button>
          </div>

          <button type="submit" className={`login-btn ${loading ? "loading" : ""}`} disabled={loading}>
            {loading ? <span className="spinner" /> : "Sign In"}
          </button>

          <p className="login-hint">Use: admin@urbanharvest.com / admin123</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
