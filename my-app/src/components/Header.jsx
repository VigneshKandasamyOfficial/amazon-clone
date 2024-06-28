import React from "react";
import "../App.css";
import ThemeButton from "./ThemeButton";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  
  return (
    <header className="header">
      <div className="logo">
        <img
          src="src/assets/images/amazon-png-logo-vector-6695.png"
          alt="Amazon Logo"
          width="100px"
          height="80px"
        />
      </div>
      <div className="menu">
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/cart" className="cart-icon-container">
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          <span className="cart-count">{cartItems.length}</span>
        </Link>
        <ThemeButton />
        {/* <Link to='/login'><button>Login</button></Link> */}
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}

export default Header;
