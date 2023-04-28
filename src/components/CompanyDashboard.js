import React, {useState} from 'react';
// import "./DompanyDashboard.css"
function CompanyDashboard() {
  const [companyName, setCompanyName] = useState('');
  const [companyPurpose, setCompanyPurpose] = useState('');
  const API_URL = "http://localhost:5000";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("df");
    // Send a POST API request with the company name and purpose
    const formData = { company_name: companyName, company_purpose: companyPurpose };
    fetch(`${API_URL}/companie`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default CompanyDashboard;
