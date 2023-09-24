import React from "react";
import Signin from "../../Components/Signin/Signin";
import "./LoginScreen.css";
import { Link } from "react-router-dom";


function LoginScreen() {
  return (
    <div className="loginScreen">
      <Link className="login_home" to="/">
        Logo
      </Link>
      <div className="loginBox">
        <Signin className="videoSource" />
      </div>
    </div>
  );
}

export default LoginScreen;
