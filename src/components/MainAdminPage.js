import React from 'react';
import "./MainAdminPage.css"
function MainAdminPage() {

    

  return (
    <div className="application-list">
      <div className="section accepted">
        <h2>Accepted Applications</h2>
        {/* List of accepted applications */}
      </div>
      <div className="section waiting">
        <h2>Waiting Applications</h2>
        {/* List of waiting applications */}
      </div>
      <div className="section rejected">
        <h2>Rejected Applications</h2>
        {/* List of rejected applications */}
      </div>
    </div>
  );
}

export default MainAdminPage;
