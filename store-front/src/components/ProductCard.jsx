import "../styles/ProductCard.css"

const ProductCard = ({ product, addToCart }) => {
    return (
      <div className="product">
        <img src={`../src/assets/${product.image}`} alt={product.name} id='shoePic'/>
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    );
  };
  
  export default ProductCard;