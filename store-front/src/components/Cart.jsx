import "../styles/Cart.css";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";
import HomeFooter from "./HomeFooter";

const Cart = ({
  cart,
  subTotal,
  onChange,
  onDecrement,
  onIncrement,
  onRemove,
}) => {

  let total= Number(subTotal).toFixed(2);
  let cartItemNum= cart.reduce((accumulator, item)=> accumulator+item.quantity,0);

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
            <div className="cart-heading">
              <h2>Shopping Cart</h2>
              <div className="totalTitle">Subtotal: $ {total.toLocaleString()}</div>
            </div>
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
        <div className="total">Subtotal ({(cartItemNum)} Items): $ {total.toLocaleString()}</div>
      </div>
      <HomeFooter />
    </>
  );
};

export default Cart;
