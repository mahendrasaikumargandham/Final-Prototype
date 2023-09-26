import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";

function Header() {
  const logo = "<AstraVerse />";
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">{logo}</Link>
      </div>
      <div className="header__right">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Header;
