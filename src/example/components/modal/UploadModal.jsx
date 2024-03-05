import { useSelector } from "react-redux";
import { userInfoSelector } from "../../data/redux/selectors";
import {
  trainFiles,
  uploadKnowledge,
} from "../../data/services/ChatbotService";
import { useRef, useState } from "react";
import FileBlock from "./FileBlock";
import toast from "react-hot-toast";

const UploadModal = () => {
  const formDataRef = useRef(new FormData());
  const userInfo = useSelector(userInfoSelector);
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleDeleteFile = (index) => () => {
    if (files.length < 0) return;
    const tmp = [...files];
    tmp.splice(index, 1);
    setFiles(tmp);
  };

  const handleBrowseFiles = (e) => {
    setProgress(0);
    const files = Array.from(e.target.files);
    setFiles(files);
  };

  const handleTrainFiles = async () => {
    try {
      const trainFilesRes = await trainFiles(userInfo.userId);
      toast.success(trainFilesRes.data.message, {
        style: { maxWidth: "400px" },
      });
      setProgress(100);
    } catch (e) {
      toast.error(e?.response?.data?.detail, { style: { maxWidth: "400px" } });
    }
  };

  const handleSubmitFiles = async () => {
    if (files.length === 0) {
      toast("Please upload your files", { icon: "⚠️" });
      return;
    }

    formDataRef.current.delete("files");
    files.forEach((file) => {
      formDataRef.current.append("files", file);
    });

    formDataRef.current.delete("userId");
    formDataRef.current.append("userId", userInfo.userId);

    try {
      const uploadResponse = await uploadKnowledge(
        formDataRef.current,
        setProgress
      );

      toast.success(uploadResponse.data.message, {
        style: { maxWidth: "400px" },
      });
      await handleTrainFiles();
    } catch (e) {
      toast.error(e?.response?.data?.detail, { style: { maxWidth: "400px" } });
      setProgress(0);
    }
  };

  return (
    <div>
      <h2>Upload your own knowledge</h2>
      <p>Notice: Please upload text files only!</p>
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

          <div className="file-browser">
            <div>
              <span style={{ color: "#2f607c" }}>browse files</span>{" "}
              <span>from device</span>
            </div>

            <input
              type="file"
              className="default-file-input"
              multiple
              onChange={handleBrowseFiles}
            />
          </div>

          <div className="uploaded-holder">
            {files.map((file, index) => (
              <div key={index} onClick={handleDeleteFile(index)}>
                <FileBlock fileData={file} />
              </div>
            ))}
          </div>

          <div className="progress-bar">
            <div
              className="progress-runner"
              style={{ width: `${progress}%` }}
            ></div>
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
