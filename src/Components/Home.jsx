// Components/Home.js
import React from 'react';
import Product from '../Components/Product/Product';
import './Home.css';
import image1 from "../../images/image1.webp"
import image2 from "../../images/image2.webp"

const Home = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: image1 },
    { id: 2, name: 'Product 2', price: 29.99, image: image2 },
    // Add more products as needed
  ];

  return (
    <div className="home-container">
      <section className="banner">
        <h2>Welcome to Halflings Novelties</h2>
        <p>Discover the best novelties in town!</p>
      </section>
      
      <section className="products" id="products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {products.map(product => (
            <Product 
              key={product.id} 
              image={product.image} 
              name={product.name} 
              price={product.price} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
