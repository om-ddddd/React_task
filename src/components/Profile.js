import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState({}); //intitalise user data as empty object
  const navigate = useNavigate();

  // Fetch user data from Local Storage
  useEffect(
    () => {
      // use effect runs after the component updates
      const username = localStorage.getItem("username");
      const password = localStorage.getItem("password"); // Optional: Include password if needed
      if (!username) {
        navigate("/login");
      } else {
        setUserData({ username, password });
      }
    },
    [] // it pervents infinite renders}
  );

  // this hooks take takes two arguments here the second argument is the dependency array

  // Logout function
  const handleLogout = () => {
    localStorage.clear(); // Clear all data from Local Storage
    navigate("/login"); // Redirect to Login Page
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1>Welcome, {userData.username}!</h1>
        <p>
          <strong>Username:</strong> {userData.username}
        </p>
        <p>
          <strong>Password:</strong> {userData.password}
        </p>{" "}
        {/* Optional */}
        <p>
          <strong>Date:</strong> {new Date().toLocaleDateString()}
        </p>{" "}
        {
          // formats date as "mm//dd//yyy"
        }
        <p>
          <strong>Time:</strong> {new Date().toLocaleTimeString()}
        </p>{" "}
        {
          // formats time as "hh:Mm:ss am/pm"
        }
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
