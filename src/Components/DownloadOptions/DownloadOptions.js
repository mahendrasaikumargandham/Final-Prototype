import React from "react";
import "./DownloadOptions.css";

function DownloadOptions() {
  return (
    <div className="downloadOptions">
      <div className="downloadFormats">
        <h3>Original</h3>
        <h3>Dubbed</h3>
      </div>
      <div className="downloadFormats">
        <button>Download Video</button>
        <button>Download Video</button>
      </div>
      <div className="downloadFormats">
        <button>Download Audio</button>
        <button>Download Audio</button>
      </div>
      <div className="downloadFormats">
        <button>Download Transcript</button>
        <button>Download Transcript</button>
      </div>
    </div>
  );
}

export default DownloadOptions;
