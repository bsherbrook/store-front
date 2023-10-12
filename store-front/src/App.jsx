import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import RouteSwitch from "./RouteSwitch";
// import { useNavigate } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Store from "./components/Store";
import productList from "./productList";
import ProductCard from "./components/ProductCard";
import About from "./components/About";
import ArtistPage from "./components/ArtistPage";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  const addToCart = (product, quantity) => {
    const newCart = JSON.parse(JSON.stringify(cart));
    const productIndex = newCart.findIndex((item) => item.id === product.id);
    let total = Number(subTotal);
    if (productIndex === -1) {
      newCart.push({ ...product, quantity });
    } else {
      newCart[productIndex].quantity += quantity;
    }
    setCart(newCart);
    //update subtotal with new item
    total += product.price * quantity;
    setSubTotal(total.toFixed(2).toLocaleString());
  };
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  function changeCartItemQuantity(productId, newQuantity) {
    setCart(
      cart.map((item) => {
        if (item.id === productId) item.quantity = newQuantity;
        return item;
      })
    );
    let total = cart.reduce(
      (accum, item) => accum + item.price * item.quantity,
      0
    );
    setSubTotal(total.toFixed(2));
  }

  function deleteFromCart(productId) {
    let newCart = cart.filter((product) => product.id !== productId);
    setCart(newCart);
    let total = newCart.reduce(
      (accum, item) => accum + item.price * item.quantity,
      0
    );
    setSubTotal(total.toFixed(2));
  }
  function onCartChange(productId, newQuantity) {
    // if new quantity is not a whole number
    if (newQuantity % 1) return;
    if (newQuantity <= 0) {
      deleteFromCart(productId);
      return;
    }

    changeCartItemQuantity(productId, newQuantity);
  }

  function decrementCartItem(product) {
    if (product.quantity === 1) {
      deleteFromCart(product.id);
      return;
    }

    changeCartItemQuantity(product.id, product.quantity - 1);
  }

  const incrementCartItem = (product) => {
    changeCartItemQuantity(product.id, product.quantity + 1);
  };

  return (
    <>
      <RouteSwitch
        Header={() => <Header width={width}/>}
        pages={[
          {
            element: <Home width={width} />,
            path: "/",
            id: 1,
          },

          {
            element: <About width={width} />,
            path: "/about",
            id: 2,
          },
          {
            element: (
              <Store
                productList={productList}
                ProductCard={ProductCard}
                addToCart={addToCart}
                cartChange={onCartChange}
                cart={cart}
                width={width}
              />
            ),
            path: "/store",
            id: 3,
          },
          {
            element: (
              <Cart
                cart={cart}
                subTotal={subTotal}
                onChange={onCartChange}
                onDecrement={decrementCartItem}
                onIncrement={incrementCartItem}
                onRemove={deleteFromCart}
                width={width}
              />
            ),
            path: "/cart",
            id: 4,
          },
          {
            element: <ArtistPage />,
            path: "/artist-profile",
            id: 5,
          },
        ]}
      />
    </>
  );
}

export default App;
