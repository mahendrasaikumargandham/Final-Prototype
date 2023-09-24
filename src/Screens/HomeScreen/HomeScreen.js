import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../../Firebase";

function HomeScreen() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(db, (data) => {
      if (data) {
        console.log(data);
        navigate("/upload");
      } else {
        console.log("Not Logged In");
        navigate("/");
      }
    });
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
}

export default HomeScreen;
