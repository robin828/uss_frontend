import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./components/Login";
import SignupPage from './components/Signup';
import MainAdminPage from './components/MainAdminPage';
import CompanyDashboard from './components/CompanyDashboard';
import CompanyUser from './components/CompanyUser';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<MainAdminPage />} />
        <Route path="/companydashboard" element={<CompanyDashboard />} />
        <Route path="/companyuser" element={<CompanyUser />} />
      </Routes>
    </Router>
  );
};

export default App;
