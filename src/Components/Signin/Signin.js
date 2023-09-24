import React, { useState } from "react";
import "./Signin.css";
import { db } from "../../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const passwd = e.target.password.value;
    const phone = e.target.phone.value;

    if (type == "signup") {
      createUserWithEmailAndPassword(db, email, passwd)
        .then(
          () =>
            updateProfile(db.currentUser, {
              phoneNumber: phone,
            }),
          (userCredential) => {
            const user = userCredential.user;
            console.log("registered with", user.phoneNumber);
            console.log("Registered with ", user.email);
          }
        )
        .then((data) => {
          console.log(data);
          navigate("/upload", { state: { phone } });
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(db, email, passwd)
        .then((data) => {
          console.log(data);
          navigate("/upload");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };
  return (
    <div className="signin">
      <div className="signin_options">
        <div
          className={login == false ? "activeDiv" : "deactiveDiv"}
          onClick={() => setLogin(false)}
        >
          Create
        </div>
        <div
          className={login == true ? "activeDiv" : "deactiveDiv"}
          onClick={() => setLogin(true)}
        >
          Login
        </div>
      </div>
      <form
        className="loginDetails"
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}
      >
        <input
          name="email"
          type="text"
          placeholder="email"
          autoComplete="off"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          required
        />
        <input name="phone" type="text" placeholder="Phone No." required />
        <button>{login ? "Login" : "Create"}</button>
      </form>
    </div>
  );
}

export default Signin;
