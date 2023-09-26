import React from "react";
import "./DubbedVideo.css";
import dubbedVideo from "./video.mp4";
function DubbedVideo() {
  return (
    <div className="dubbedVideo">
      <video className="videoplayer" controls>
        <source src={dubbedVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default DubbedVideo;
