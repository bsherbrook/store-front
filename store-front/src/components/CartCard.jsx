import "../styles/CartCard.css";
import { useState } from "react";
import Quantity from "./Quantity";
import Button from "react-bootstrap/esm/Button";

const CartCard = ({ item, cartChange, increase, decrease, remove }) => {


  return (
    <>
      <div id="cartItem">
        <img src={`/${item.image}`} alt={item.name} id="cartItemPic" />
        <div className="cart-item-info">
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <div className="cart-quantity-box">
            <Quantity
              quantity={item.quantity}
              increase={() => increase(item)}
              decrease={() => decrease(item)}
              cartChange={(value) => cartChange(item.id, +value)}
            />
          </div>
          <Button id="deleteCartBtn" onClick={() => remove(item.id)}>
            Delete from Cart
          </Button>
        </div>
        <div className="cart-item-description">{item.description}</div>
      </div>
    </>
  );
};
export default CartCard;
