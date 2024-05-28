const Product = ({ image, name, price }) => {
  return (
    <div className="product-item">
      <div className="image-wrapper">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
