import "../styles/ProductCard.css"

const ProductCard = ({ product, addToCart }) => {
    return (
      <div id="productCard" className="product">
        <img src={`../src/assets/${product.image}`} alt={product.name} id='productCardPic'/>
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    );
  };
  
  export default ProductCard;