import React, { useState } from "react";
import "./VideoSource.css";
import { useNavigate } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";

function VideoSource() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  const handleFileSelect = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.type.startsWith("video/")) {
        setSelectedFile(file);
      } else {
        alert("Please select a video file (e.g., MP4, MOV, etc.).");
        event.target.value = null;
      }
    }
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("video", selectedFile);

    fetch("/upload-video", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Video uploaded successfully.");
        } else {
          console.error("Failed to upload video.");
        }
      })
      .catch((error) => {
        console.error("An error occurred while uploading the video.", error);
      });
    navigate("/result");
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    if (text) {
      const youtubeRegex =
        /^(https?:\/\/)?(www\.)?(youtu\.be\/|youtube\.com\/watch\?v=)([A-Za-z0-9_-]+)/;

      if (youtubeRegex.test(text)) {
        fetch("http://localhost:5000/send-text", {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: text,
        })
          .then((response) => {
            if (response.ok) {
              return response.text();
            } else {
              throw new Error("Network response was not ok");
            }
          })
          .then((data) => {
            console.log("Response from Flask:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        navigate("/result", { state: { text } });
      } else {
        alert("Please enter a valid YouTube link.");
      }
    } else if (selectedFile) {
      handleUpload();
    } else {
      alert("Please select a video file or enter a YouTube link.");
    }
  };
  return (
    <div className="videoSource">
      <div className="videoYTLink">
        <YouTubeIcon />
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          className="input_box"
          placeholder="Insert Link"
        />
      </div>
      <h3>-------- OR --------</h3>
      <div
        className="file-picker"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {selectedFile ? (
          <div className="video_details">{selectedFile.name}</div>
        ) : (
          <label className="custom-file-input">
            Upload file
            <input
              type="file"
              className="file-input"
              accept="video/*"
              onChange={handleFileSelect}
            />
          </label>
        )}
      </div>
      <button className="submitVideo" onClick={() => handleSubmit()}>
        Submit
      </button>
    </div>
  );
}

export default VideoSource;
