// Components/Product/Product.js
import React, { useContext } from 'react';
import { CartContext } from '../Cart/CartContext';
import './Product.css';

const Product = ({ id, image, name, price }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-item">
      <div className="image-wrapper">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart({ id, image, name, price })}>Add to Cart</button>
    </div>
  );
};

export default Product;
