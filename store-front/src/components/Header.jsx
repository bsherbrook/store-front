import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div id="headerBox">
      <div id="headerTitleBox">
        <Link to="/" id="titleLink">
          <div>
            <h3 id="headerTitleText">Gallery</h3>
            <h3 id="headerTitleText2">at SIP</h3>
          </div>
        </Link>
      </div>
      <div id="headerButtonBox">
        <Link to="/about" id="headerLink">
          About
        </Link>
        <Link to="/artist-profile" id="headerLink">
          Exhibits
        </Link>
        <Link to="/store" id="headerLink">
          Store
        </Link>
        <Link to="/cart" id="headerLink">
          Shopping Cart
        </Link>
      </div>
    </div>
  );
}

export default Header;
