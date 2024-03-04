import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const FileBlock = ({ fileData }) => {
  const file = {
    name: fileData.name.split(".")[0],
    extension: fileData.name.split(".")[1],
    size: (fileData.size / 1048576).toFixed(2),
  };
  return (
    <div className="file-block">
      <div className="file-info">
        <p className="file-name">{file.name}</p>
        <span>.{file.extension}</span>
      </div>
      <div className="file-option">
        <p>{file.size} MB |</p>
        <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default FileBlock;
