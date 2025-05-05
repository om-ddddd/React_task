import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState(""); //intitalise variables with empty string
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // redirect users to different routes , here to /profile

  const handleSubmit = (e) => {
    e.preventDefault(); //page will not be refreshed after submitting
    // Save login details to Local Storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    // Redirect to Profile Page
    navigate("/profile"); // after login user will be directed to profile page
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        {" "}
        {
          // the onsubmit event triggers when form submitted
        }
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password" //it hides the input characters
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit" // it defines the button as form submission button, and when button clicked handled data with js
          className="login-button"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
