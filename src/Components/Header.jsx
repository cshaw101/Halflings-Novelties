import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <input type="text" placeholder="Search for products..." />
      <div className="cart-icon">
        <Link to="/cart">Cart (0)</Link>
      </div>
    </header>
  );
};

export default Header;
