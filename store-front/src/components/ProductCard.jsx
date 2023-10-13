import "../styles/ProductCard.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Quantity from "./Quantity";
import Cup from "../assets/cup-hot-fill.svg";

const ProductCard = ({ product, addToCart, cartChange }) => {
  const [quantity, setQuantity] = useState(1);
  const handleStoreChange = (e) => {
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
  const showInfo = (e) => {
    let productDisplay = e.target.parentNode;
    productDisplay.className = "hidden";
    let productInfo = document.getElementById(`productInfoCard${product.id}`);
    productInfo.className += ` show`;
  };
  const showProduct = (e) => {
    if (e.target.className === "productInfoCard show") {
      e.target.className = "productInfoCard";
      e.target.nextSibling.className = "";
    }
    else {
      let a=e.target.parentNode;
      a.className = "productInfoCard";
      a.nextSibling.className=''
    }
  };

  return (
    <div id="productCard" className="product">
      <div
        id={`productInfoCard${product.id}`}
        className="productInfoCard"
        onClick={showProduct}
      >
        <img src={Cup} alt="logo" id="infoCardLogo" className="" />
        <div id="infoCardTitle" className="">
          {product.name}
        </div>
        {product.description}
      </div>
      <div id="productDisplay">
        <img
          src={`./assets/${product.image}`}
          alt={product.name}
          id="productCardPic"
          onClick={showInfo}
        />
        <p id="infoHelper">Click pic for product info</p>
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        <Quantity
          increase={increase}
          decrease={decrease}
          cartChange={cartChange}
          handleStoreChange={handleStoreChange}
          quantity={quantity}
        />
        <Button
          variant="primary"
          onClick={(e) => {
            addToCart(product, quantity);
            buttonShake(e);
          }}
          disabled={quantity < 1 || quantity % 1 !== 0}
          id="addToCartButton"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
