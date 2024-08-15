import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="company-name">Dashboard</div>
      <div className="search-container">
        <input
          type="text"
          id="search-input"
          className="search-input"
          placeholder="Search anything..."
        />
      </div>
    </header>
  );
};

export default Header;
