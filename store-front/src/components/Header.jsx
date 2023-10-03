import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div id="headerBox">
      <div id="headerTitleBox">
        <Link to="/" id="titleLink">
          <div>
            <h2 id="headerTitleText">Gallery</h2>
            <h2 id="headerTitleText2">at SIP</h2>
          </div>
        </Link>
      </div>
      <div id="headerButtonBox">
        <Link to="/about" id="aboutLink">
          About
        </Link>
        <Link to="/store">
          Store
        </Link>
        <Link to="/cart">
          Shopping Cart
        </Link>
      </div>
    </div>
  );
}

export default Header;
