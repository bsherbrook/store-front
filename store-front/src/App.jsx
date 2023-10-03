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
import ArtistPage from "./components/ArtistPage"

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal]= useState(0);
  const addToCart = (product, quantity) => {
    const newCart = JSON.parse(JSON.stringify(cart));
    const productIndex = newCart.findIndex((item) => item.id === product.id);
    let total=Number(subTotal);
    if (productIndex === -1){ 
      quantity=1;
      newCart.push({...product, quantity})}
    else{
      newCart[productIndex].quantity += 1
    }
      setCart(newCart);
      //update subtotal with new item
      total+=product.price;
      setSubTotal(total.toFixed(2));  
  };
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <>
      <RouteSwitch
        Header={() => <Header />}
        pages={[
          {
            element: <Home 
              width={width}
            />,
            path: "/",
            id: 1,
          },

          {
            element: <About />,
            path: "/about",
            id: 2,
          },
          {
            element: (
              <Store
                productList={productList}
                ProductCard={ProductCard}
                addToCart={addToCart}
              />
            ),
            path: "/store",
            id: 3,
          },
          {
            element: <Cart 
            cart={cart} 
            subTotal={subTotal}
            />,
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
