import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">Logo</Link>
      </div>
      <div className="header__right">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Header;
