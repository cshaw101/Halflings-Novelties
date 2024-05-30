// Components/Home.js
import React from 'react';
import Product from '../Components/Product/Product';
import './Home.css';
import image1 from "../../images/image1.webp"
import image2 from "../../images/image2.webp"
import image3 from "../../images/image3.webp"
import image4 from "../../images/image4.jpg"
import image5 from "../../images/image5.jpg"
import image6 from "../../images/image6.jpg"

const Home = () => {
  const products = [
    { id: 1, name: 'Pokemon TCG: Lost Origin Elite', price: 40.95, image: image1 },
    { id: 2, name: 'Pokemon TCG: Scarlet and Violet: Paradox RIFT', price: 106.94, image: image2 },
    { id: 3, name: 'Pokemon Sword And Shield Brilliant Stars Booster Box: 36 packs of 10 cards each', price: 232.98, image: image3 },
    { id: 4, name: 'POKEMON TCG: Scarlet and Violet: PALDEAN Fates', price: 22.99, image: image4 },
    { id: 5, name: 'Pokemon TCG: Crown Zenith Elite Trainer Box', price: 49.30, image: image5 },
    { id: 6, name: 'Pokemon TCG: XY Evolutions,', price: 29.77, image: image6 },
  ];

  return (
    <div className="home-container">
      <section className="banner">
        <h2>Welcome to Halflings Novelties</h2>
        <p>We sell Cards and Other Stuff!</p>
      </section>
      
      <section className="products" id="products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {products.map(product => (
            <Product 
              key={product.id}
              id={product.id}
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
