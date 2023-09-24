import "./Cart.css";
import Header from "./Header";


const Cart = ({ cart }) => {
  return (
    <>
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cart;