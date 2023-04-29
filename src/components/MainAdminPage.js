import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MainAdminPage() {
  const [companies, setCompanies] = useState([
    { id: 1, name: 'Company A', status: 'pending' },
    { id: 2, name: 'Company B', status: 'approved' },
    { id: 3, name: 'Company C', status: 'rejected' },
  ]);

   const API_URL = "https://uss.onrender.com";
  //  const API_URL = "http://localhost:5000";
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const response = await fetch(`${API_URL}/collections`);
      const data = await response.json();
      setCollections(data);
      console.log(data)
    };
    fetchCollections();
  }, []);

  const handleAccept = async (id) => {
    const updatedCompanies = collections.map((company) => {
      if (company.id === id) {
        return { ...company, status: 'approved' };
      }
      return company;
    });
    console.log(updatedCompanies)
    setCollections(updatedCompanies);
    await axios.post(`${API_URL}/company/update-status`, { status: 'approved', id: id });
    
  };

  const handleReject = async (id) => {
    const updatedCompanies = collections.map((company) => {
      if (company.id === id) {
        return { ...company, status: 'rejected' };
      }
      return company;
    });
    setCollections(updatedCompanies);
    await axios.post(`${API_URL}/company/update-status`, { status: 'rejected', id: id  });
    
  };

  return (
    <div>
      <h1>Company Dashboard</h1>
      {collections.map((company) => (
        <div key={company.id}>
          <h2>{company.companyPurpose}</h2>
          <p>Request Status: {company.status}</p>
            <div>
              <button onClick={() => handleAccept(company.id)}>Accept</button>
              <button onClick={() => handleReject(company.id)}>Reject</button>
            </div>
          
        </div>
      ))}
    </div>
  );
}

export default MainAdminPage;

