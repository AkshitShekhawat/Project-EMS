import React from 'react';
import HomeHeaderComponent from './HomeHeaderComponent';
import FooterComponent from './FooterComponent';

const DashboardComponent = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      
      {/* Header */}
      <HomeHeaderComponent />

      {/* Main Dashboard Content */}
      <main style={{ flex: 1, padding: '20px' }}>
        <h1>📊 Welcome to Your Dashboard</h1>
        <p>This is your EMS (Employee Management System) dashboard.</p>
        <ul>
          <li>👥 View all employees</li>
          <li>➕ Add new employee</li>
          <li>📄 Generate reports</li>
          <li>⚙️ Settings and profile</li>
        </ul>
      </main>

      {/* Footer */}
      <FooterComponent />
    </div>
  );
};

export default DashboardComponent;
