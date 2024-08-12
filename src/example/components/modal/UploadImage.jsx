import { useState } from "react";
import { extractImage, trainImage } from "../../data/services/ChatbotService";
import { toast } from "react-hot-toast";

const UploadImage = () => {
  const [extractedText, setExtractedText] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBrowseFile = async (e) => {
    try {
      setLoading(true);
      const form = new FormData();
      form.append("file", e.target.files[0]);
      const extractedText = await extractImage(form);
      setExtractedText(extractedText.data.message);
    } catch (e) {
      console.log("browse image error: ", e);
      toast.error(e?.response?.data?.detail, {
        style: { maxWidth: "400px" },
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTrain = async () => {
    try {
      setExtractedText(null);
      setLoading(true);
      console.log(extractedText);
      const trainRes = await trainImage(extractedText);
      toast.success(trainRes.data.message, {
        style: { maxWidth: "400px" },
      });
    } catch (e) {
      console.log("train image error: ", e);
      toast.error(e?.response?.data?.detail || "Something went wrong", {
        style: { maxWidth: "400px" },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Upload your image here</h2>
      <p>Notice: Please upload jpg, jpeg, png file only!</p>

      <div className="upload-form-container">
        <div className="upload-files-container">
          <div className="file-browser">
            <div>
              <span style={{ color: "#2f607c" }}>browse files</span>{" "}
              <span>from device</span>
            </div>

            <input
              type="file"
              className="default-file-input"
              accept="image/png, image/jpg, image/jpeg"
              onChange={handleBrowseFile}
            />
          </div>

          <div
            className="loading-holder"
            style={{ minHeight: "200px", padding: "20px 0" }}
          >
            {loading && (
              <div>
                <p>Wait a moment ...</p>
                <div className="loading"></div>
              </div>
            )}

            {extractedText !== null && (
              <textarea
                style={{ width: "100%", minHeight: "200px" }}
                value={extractedText}
                onChange={(e) => setExtractedText(e.target.value)}
              />
            )}
          </div>

          <button
            type="button"
            className={`upload-button ${
              extractedText !== null ? "able" : "disable"
            }`}
            onClick={handleTrain}
          >
            Train content
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
