import "../styles/Cart.css";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  subTotal,
  onChange,
  onDecrement,
  onIncrement,
  onRemove,
}) => {

  let total= Number(subTotal).toFixed(2);

  return (
    <>
      <div className="cart">
        {!cart?.length ? (
          <div className="empty-cart">
            <p className="empty-cart-text">
              There are currently no items in your cart.
            </p>
            <Link to="/store" className="continue-shopping">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {cart.map((item) => (
              <CartCard
                key={item.id}
                item={item}
                cart={cart}
                cartChange={onChange}
                decrease={onDecrement}
                increase={onIncrement}
                remove={onRemove}
              />
            ))}
          </div>
        )}
        <div className="total">Subtotal: ${total.toLocaleString()}</div>
      </div>
    </>
  );
};

export default Cart;
