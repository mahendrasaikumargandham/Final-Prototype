import React, { useState } from "react";
import "./UploadScreen.css";
import { signOut } from "firebase/auth";
import { db } from "../../Firebase";
import { useLocation, useNavigate } from "react-router-dom";
import VideoSource from "../../Components/VideoSource/VideoSource";
import LogoutIcon from "@mui/icons-material/Logout";

function UploadScreen() {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(db).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="uploadScreen">
      <button className="signout" onClick={() => handleSignOut()}>
        <LogoutIcon />
        Signout
      </button>
      <VideoSource />
    </div>
  );
}

export default UploadScreen;
