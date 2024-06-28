import React from "react";
import { Link } from "react-router-dom";
import './Register.jsx';
import './Login.css';

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Sign-In</h2>
      <form>
        <div className="form-group">
          <label>Email or mobile phone number</label>
          <input type="email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        New to Amazon? <Link to="/register">Create your Amazon account</Link>
      </p>
    </div>
  );
};

export default Login;
