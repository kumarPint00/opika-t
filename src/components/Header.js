import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1>My React App</h1>
    <nav>
      <ul>
        <li><Link to="/">Form</Link></li>
        <li><Link to="/data">Data List</Link></li>
        <li><Link to="/todo">Todo</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
