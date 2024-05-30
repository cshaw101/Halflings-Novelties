import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../Cart/CartContext';
import './Header.css';

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const { cart } = useContext(CartContext);

  // Calculate the total number of items in the cart
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

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
      <div className='search-cart-container'>
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
        </div>
        <div className='cart-icon'>
          <Link to="/cart">Cart({cartItemCount})</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
