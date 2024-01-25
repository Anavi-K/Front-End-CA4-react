import React from 'react';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header>
      <div className="toggle-button" onClick={toggleDarkMode}>
        {darkMode ? 'Light' : 'Dark'}
      </div>
      <div className="logo" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
        Kalvium
      </div>
    </header>
  );
};

export default Header;