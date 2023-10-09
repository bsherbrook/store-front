import "../styles/Cart.css";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";
import HomeFooter from "./HomeFooter";
import Empty from "../assets/empty.jpg";
import { motion } from "framer-motion";

const Cart = ({
  cart,
  subTotal,
  onChange,
  onDecrement,
  onIncrement,
  onRemove,
}) => {
  let total = Number(subTotal).toFixed(2);
  let cartItemNum = cart.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  return (
    <>
      <div className="cart">
        {!cart?.length ? (
          <div className="mt-cart">
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 4.0,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <img src={Empty} alt="empty frame" className="mt-frame" />
            </motion.div>

            <p className="mt-cart-title">
              There are currently no items in your cart.
            </p>
            <Link to="/store" className="mt-cart-link">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="shopping-cart">
            <div className="cart-heading">
              <h2>Shopping Cart</h2>
              <div className="totalTitle">
                Subtotal: $ {total.toLocaleString()}
              </div>
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
        <div className="total">
          Subtotal ({cartItemNum} Items): $ {total.toLocaleString()}
        </div>
      </div>
      <HomeFooter />
    </>
  );
};

export default Cart;
