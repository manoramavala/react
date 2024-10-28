import React from 'react';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
}

export default ThemeToggle;
