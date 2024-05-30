// Components/Cart/Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(product => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} />
              <div className="cart-item-details">
                <h3>{product.name}</h3>
                <p>${product.price} x {product.quantity}</p>
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
