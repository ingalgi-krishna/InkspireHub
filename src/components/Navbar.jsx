import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <nav className="navbar">
       <div className="nav-logo">InkSpire<span className="hub">Hub</span></div>
       <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        {isAuthenticated && <li><Link to="/new">Blogs</Link></li>}
        <li>
          {isAuthenticated ? (
            <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
          ) : (
            <button onClick={() => loginWithRedirect()}>Login</button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
