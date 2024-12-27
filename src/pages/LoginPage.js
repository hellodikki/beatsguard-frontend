import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Please fill in all fields.");
    } else {
      alert("Login Successful!");
      // Add login logic here (e.g., send data to backend)
    }
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit">Login</button>
          <p>
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
