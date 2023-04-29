import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  const handleToggle = () => {
    console.log("88")
    setIsAdmin(!isAdmin);
  };
  console.log(isAdmin);

  // const API_URL = "https://uss.onrender.com";
  const API_URL = "http://localhost:5000";
  const signupUser = (name, email, password, role, isAdmin) => {
    console.log(name, email, password, role, isAdmin)
    const userData = { name, email, password, role, isAdmin };
    return axios.post(`${API_URL}/signup`, userData);
  };

  

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signupUser(name, email, password, role, isAdmin);
      if (response.status === 200) {
        navigate("/");
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <label htmlFor="role">Role:</label>
        <input type="text" id="role" value={role} onChange={handleRoleChange} />
      </div>
      <div>
      <label htmlFor="admin-toggle">Admin:</label>
      <input
        id="admin-toggle"
        type="checkbox"
        checked={isAdmin}
        onChange={handleToggle}
      />
    </div>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignupPage;
