import "../styles/Cart.css";
import CartCard from "./CartCard";

const Cart = ({ cart, subTotal }) => {
  

  return (
    <>
      <div className="cart">
        <div className="shopping-cart">
          <h2>Shopping Cart</h2>
          {cart.map((item) => (
            <CartCard key={item.id} item={item} cart={cart} />
          ))}
        </div>
        <div className="total">Subtotal: {subTotal}</div>
      </div>
    </>
  );
};

export default Cart;
