import React from "react";
import { useLocation } from "react-router-dom";
import YouTube from "react-youtube";
import "./OriginalVideo.css";

function OriginalVideo() {
  const opts = {
    height: "330",
    width: "540",
    playerVars: {
      autoplay: 0,
    },
  };

  const containerStyle = {
    borderRadius: "20px",
    overflow: "hidden",
  };

  const location = useLocation();
  const link = location.state.text;

  function extractVideoIdFromUrl(url) {
    try {
      const parsedUrl = new URL(url);
      const searchParams = new URLSearchParams(parsedUrl.search);

      if (parsedUrl.hostname === "www.youtube.com" && searchParams.has("v")) {
        return searchParams.get("v");
      } else if (parsedUrl.hostname === "youtu.be") {
        return parsedUrl.pathname.substring(1);
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }

  const videoId = extractVideoIdFromUrl(link);

  return (
    <div style={containerStyle}>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export default OriginalVideo;
