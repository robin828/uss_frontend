import React, {useState} from 'react';
// import "./DompanyDashboard.css"
import { useNavigate } from "react-router-dom";

function CompanyDashboard() {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState('');
  const [companyPurpose, setCompanyPurpose] = useState('');
  const [postion, setPosition] = useState('');
  // const API_URL = "https://uss.onrender.com";
  const API_URL = "http://localhost:5000";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("df");
    // Send a POST API request with the company name and purpose
    const formData = { company_name: companyName, company_purpose: companyPurpose, postion: postion };
    fetch(`${API_URL}/companie`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => {
        console.log(response.json())
        if (response.status === 200 && response.data.superUser=== true ) {
          navigate('/status');
        }
        else {
          navigate('/companydashboard')
        }
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="companyPurpose">Company Purpose:</label>
        <input
          type="text"
          id="companyPurpose"
          value={companyPurpose}
          onChange={(event) => setCompanyPurpose(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Postion">Your Position:</label>
        <input
          type="text"
          id="Postion"
          value={postion}
          onChange={(event) => setPosition(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CompanyDashboard;
