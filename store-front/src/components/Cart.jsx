import "../styles/Cart.css";

const Cart = ({ cart, subTotal }) => {
  return (
    <>
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <div className="total">
            Subtotal: {subTotal}
      </div>
    </>
  );
};

export default Cart;
