// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Shop from './Components/Store/Shop';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import { CartProvider } from './Components/Cart/CartContext';
import './App.css';
import './global.css'


const App = () => {
  return (
    <CartProvider>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
