import { ReactComponent as Crown } from "../Logo/Logo.svg";
import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/Firebase";

function Header({ currentuser }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Crown className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentuser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN-IN
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
