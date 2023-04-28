import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const API_URL = "http://localhost:5000";

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const login = async (email, password) => {

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }


  const handleFormSubmit = async (event) => {
    console.log("88")
    event.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password
      });
      console.log(response.status)
      // If the response is successful, redirect to the dashboard
      if (response.status === 200 && response.data.superUser=== true ) {
        navigate('/dashboard');
      }
      else {
        navigate('/companydashboard')
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <form onSubmit={handleFormSubmit}>
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
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
