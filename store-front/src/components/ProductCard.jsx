import "../styles/ProductCard.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const ProductCard = ({ product, addToCart, cart }) => {
  const [quantity, setQuantity] = useState(1);
  const handleChange = (e) => {
    let val = e.target.value;
    setQuantity(val === "" ? val : +val);
  };

  const increase = () => setQuantity((quantity) => quantity + 1);
  const decrease = () =>
    setQuantity((quantity) => {
      if (quantity > 1) return quantity - 1;
      return quantity;
    });

  const buttonShake = (e) => {
    e.target.style.backgroundColor = "green";
    e.target.className += ` shake`;
    setTimeout(() => {
      e.target.className = `btn btn-primary`;
      // e.target.style.backgroundColor='#0d6efd';
    }, 1000);
  };
  return (
    <div id="productCard" className="product">
      <img
        src={`../src/assets/${product.image}`}
        alt={product.name}
        id="productCardPic"
      />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <div id="quantityBox">
        <Button
          id="minusButton"
          variant="light"
          onClick={decrease}
          aria-label="decrease quantity"
          className="btn-sm"
        >
          -
        </Button>{" "}
        <input
          name="quantityInput"
          id="quantityInput"
          value={quantity}
          type="number"
          min="1"
          onChange={handleChange}
          autoComplete="off"
          placeholder="1"
        />
        <Button
          id="addButton"
          variant="light"
          onClick={increase}
          aria-label="increase quantity"
          className="btn-sm"
        >
          +
        </Button>{" "}
      </div>
      <Button
        variant="primary"
        onClick={(e) => {
          addToCart(product, quantity);
          buttonShake(e);
          console.log(cart)
        }}
        disabled={quantity < 1 || quantity % 1 !== 0}
        id="addToCartButton"
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
