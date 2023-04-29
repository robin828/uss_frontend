import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [check, setCheck] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const navigate = useNavigate();
  const API_URL = "https://uss.onrender.com";
  // const API_URL = "http://localhost:5000";
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleCompanyName = (event) => {
    setCompanyName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const login = async (email, password) => {

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password,
        companyName: companyName
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
      localStorage.setItem('user', JSON.stringify(response.user))
      // If the response is successful, redirect to the dashboard
      if (response.status === 200 && response.data.superUser === true ) {
        navigate('/dashboard');
      }
      else if(response.status === 200 && check ) {
        navigate('/companyuser');
      }
      else {
        navigate('/companydashboard')
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleToggle = () => {
    console.log("88")
    setCheck(!check);
  };


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
      {check && <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={handleCompanyName}
        />
      </div>}
      <div>
      <label htmlFor="admin-toggle">Already registered company</label>
      <input
        id="admin-toggle"
        type="checkbox"
        checked={check}
        onChange={handleToggle}
      />
    </div>
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
