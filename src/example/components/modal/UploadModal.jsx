import { useSelector } from "react-redux";
import { userInfoSelector } from "../../data/redux/selectors";
import { uploadKnowledge } from "../../data/services/ChatbotService";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const UploadModal = () => {
  const formDataRef = useRef(new FormData());
  const userInfo = useSelector(userInfoSelector);
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleDropFiles = (e) => {
    e.preventDefault();
    console.log("drop", e.dataTransfer.files);
  };

  const handleBrowseFiles = (e) => {
    const files = Array.from(e.target.files);
    setFiles(files);
    formDataRef.current.delete("files");
    files.forEach((file) => {
      formDataRef.current.append("files", file);
    });
  };

  const handleSubmitFiles = () => {
    if (files.length === 0) {
      toast("Please upload your files", { icon: "⚠️" });
      return;
    }

    formDataRef.current.delete("userId");
    formDataRef.current.append("userId", userInfo.userId);

    toast.promise(
      uploadKnowledge(formDataRef.current, setProgress),
      {
        success: (res) => res.data.message,
        error: (err) => err.response.data.detail,
      },
      { style: { maxWidth: "400px" } }
    );
  };

  useEffect(() => {
    console.log("progress: ", progress);
  }, [progress]);

  return (
    <div>
      <h2>Upload your own knowledge</h2>
      <p>Notice: Please upload pdf, txt, doc, docx files only!</p>
      <div className="upload-form-container">
        <div className="upload-files-container">
          {/* <div className="drag-file-area" draggable onDrop={handleDropFiles}>
            <span className="material-icons-outlined upload-icon">
              {" "}
              file_upload{" "}
            </span>
            <h3 className="dynamic-message"> Drag & drop any file here </h3>
            <label className="label">
              or{" "}
              <span className="browse-files">
                <input
                  type="file"
                  className="default-file-input"
                  multiple
                  onChange={handleBrowseFiles}
                />
                <span className="browse-files-text">browse file</span>{" "}
                <span>from device</span>{" "}
              </span>{" "}
            </label>
          </div> */}

          <div>
            <input
              type="file"
              className="default-file-input"
              multiple
              onChange={handleBrowseFiles}
            />
            <span>browse file</span> <span>from device</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-runner"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <span className="cannot-upload-message">
            {" "}
            <span className="material-icons-outlined">error</span> Please select
            a file first{" "}
            <span className="material-icons-outlined cancel-alert-button">
              cancel
            </span>{" "}
          </span>
          <div className="file-block">
            <div className="file-info">
              {" "}
              <span className="material-icons-outlined file-icon">
                description
              </span>{" "}
              <span className="file-name"> </span> |{" "}
              <span className="file-size"> </span>{" "}
            </div>
            <span className="material-icons remove-file-icon">delete</span>
            <div className="progress-bar"> </div>
          </div>
          <button
            type="button"
            className={`upload-button ${files.length > 0 ? "able" : "disable"}`}
            onClick={handleSubmitFiles}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
