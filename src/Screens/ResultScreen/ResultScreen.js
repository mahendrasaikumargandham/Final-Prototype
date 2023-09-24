import React, { useState } from "react";
import OriginalVideo from "../../Components/OriginalVideo/OriginalVideo";
import "./ResultScreen.css";
import DubbedVideo from "../../Components/DubbedVideo/DubbedVideo";
import DownloadOptions from "../../Components/DownloadOptions/DownloadOptions";

function ResultScreen() {
  const [processing, setProcessing] = useState(false);
  const [showDubbedScreen, setShowDubbedScreen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleProcessing = () => {
    fetch("http://localhost:5000/send-option", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ selectedOption }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from Flask:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setShowDubbedScreen(true);
  };

  const handleSubmit = () => {
    setProcessing(true);
  };

  return (
    <div className="resultScreen">
      {processing ? (
        <div className="resultTranslated">
          <div className="resultScreen_top">
            <DubbedVideo />
            <div className="resultOptions">
              <select value={selectedOption} onChange={handleSelectChange}>
                <option disabled>Select target language</option>
                <option value="hi">Hindi</option>
                <option value="te">Telugu</option>
                <option value="ta">Tamil</option>
                <option value="kn">Kannada</option>
                <option value="ml">Malayalam</option>
                <option value="mr">Marathi</option>
              </select>
              <button
                onClick={() => handleProcessing()}
                className="translate_button"
              >
                Translate
              </button>
            </div>
          </div>
          <div className="resultScreen_bottom">
            <DownloadOptions />
          </div>
        </div>
      ) : (
        <div>
          {/* {showDubbedScreen ? (
            <div>
              <h2>
                The video is being processed. You will be notified, once the
                video is ready.
              </h2>
            </div>
          ) : ( */}
          <div className="resultScreen_top">
            <OriginalVideo />
            <div className="resultOptions">
              <select>
                <option disabled>Select target language</option>
                <option>Hindi</option>
                <option>Telugu</option>
                <option>Tamil</option>
                <option>Kannada</option>
                <option>Malayalam</option>
                <option>Marathi</option>
              </select>
              <button
                onClick={() => handleSubmit()}
                className="translate_button"
              >
                Translate
              </button>
            </div>
          </div>
          {/* )} */}
        </div>
      )}
    </div>
  );
}

export default ResultScreen;
