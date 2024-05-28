import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <header className='header'>
      <div className='logo'>
        <Link to="/">HalfLings Novelties</Link>
      </div>
      <nav className='navBar'>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className='searchbar'>
        {searchOpen ? (
          <input
            type="text"
            placeholder="Search for products..."
            className="search-input"
            onBlur={() => setSearchOpen(false)}
            autoFocus
          />
        ) : (
          <FontAwesomeIcon
            icon={faSearch}
            className="search-icon"
            onClick={toggleSearch}
          />
        )}
        <div className="cart-icon">
          <Link to="/cart">Cart (0)</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
