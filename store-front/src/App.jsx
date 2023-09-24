import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import RouteSwitch from "./RouteSwitch";
// import { useNavigate } from "react-router-dom";
import Cart from './components/Cart';
import Home from './components/Home';
import Store from './components/Store';
import productList from './productList';
import ProductCard from './components/ProductCard';
import About from './components/About';


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
    <RouteSwitch
      Header={()=>(
        <Header 

        />
      )}
      pages={[
        {
          element:(
            <Home />
          ),
          path:"/",
          id:1,
        },

        {
          element:(
            <About />
          ),
          path: "/about",
          id:2,
        },
        {
          element:(
            <Store 
              productList={productList}
              ProductCard={ProductCard}
              addToCart={addToCart}
            />
          ),
          path: "/store",
          id:3,
        },
        {
          element:(
            <Cart 
              cart={cart}
            />
          ),
          path: "/cart",
          id:4
        },
      ]}
    />
    </>
  )
}

export default App
