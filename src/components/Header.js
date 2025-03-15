import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Logan Anderson's Portfolio</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}


export default Header;
