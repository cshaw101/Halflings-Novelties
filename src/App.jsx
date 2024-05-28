import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Shop from './Components/Store/Shop';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
