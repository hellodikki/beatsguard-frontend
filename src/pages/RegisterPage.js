import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import "../styles/RegisterPage.css";

const RegisterPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isMatching, setIsMatching] = useState(true);

  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}/;

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(value === "" || passwordRegex.test(value)); // Valid if empty or matches regex
    setIsMatching(confirmPassword === "" || confirmPassword === value); // Matching if confirmPassword is empty
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setIsMatching(value === "" || value === password); // Valid if empty or matches password
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isPasswordValid || password !== confirmPassword) {
      alert("Please fix the errors before submitting.");
    } else {
      alert("Registration Successful!");
      // Add form submission logic here
    }
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" required />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              className={!isPasswordValid && password !== "" ? "error" : ""}
              pattern={passwordRegex.source}
              title="Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character."
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className={!isMatching && confirmPassword !== "" ? "error" : ""}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit">Register</button>
          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
