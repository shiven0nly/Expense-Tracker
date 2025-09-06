import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Make sure you have react-icons installed

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="header">
      <h1>Expense Tracker</h1>
      <button onClick={toggleTheme} className="theme-toggle-btn">
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
    </header>
  );
};

export default Header;