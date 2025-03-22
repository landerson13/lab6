import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import usePersistState from "./Persist";
import '../App.css'; 

function Header() {
  // Used the usePersistState hook to change theme state
  const [theme, setTheme] = usePersistState('theme', 'light');

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme); 
  }, [theme, setTheme]);

  // Changes theme of navigation, header, and button
  return (
    <header className={theme}>
      <h1>Logan Anderson's Portfolio</h1>
      <nav className={theme}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className={theme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

export default Header;

