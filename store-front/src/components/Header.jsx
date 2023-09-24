import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div id="headerBox">
      <div id="headerTitleBox">
        <h1>Bryans Shopping Website</h1>  
      </div>  
      <div id="headerButtonBox">
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/store"><button>Store</button></Link>
        <Link to="/cart"><button>Shopping Cart</button></Link>
      </div>  
    </div>
  );
}

export default Header;
