import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../../Firebase";
import "./HomeScreen.css";

function HomeScreen() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(db, (data) => {
      if (data) {
        console.log(db.currentUser?.email);
        navigate("/");
      } else {
        console.log("Not Logged In");
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="homeScreen">
      <Header />
      <div className="uploadVideo">
        <Link to="/login">Upload Video</Link>
      </div>
    </div>
  );
}

export default HomeScreen;
