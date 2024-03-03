import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faComment, faUpload } from "@fortawesome/free-solid-svg-icons";
import HistoryTitle from "./HistoryTitle";
import { useSelector } from "react-redux";
import { historySelector } from "../../data/redux/selectors";
import { useDispatch } from "react-redux";
import { initMessages, initSession } from "../../data/redux/actions";
import { v4 as uuidv4 } from "uuid";

const SideBar = ({ isOpen, setIsDialogOpen }) => {
  const chatHistory = useSelector(historySelector);
  const dispatch = useDispatch();

  const handleNewChat = () => {
    dispatch(initMessages([]));
    const newSession = uuidv4();
    dispatch(initSession(newSession));
  };

  return (
    <div className={`bg-white p-4 left ${isOpen ? "show" : "hide"}`}>
      <div className="side_bar-options">
        <div className="new_chat" onClick={handleNewChat}>
          <FontAwesomeIcon icon={faPlus} />
          <p>New chat</p>
        </div>
        <div className="new_chat" onClick={() => setIsDialogOpen(true)}>
          <FontAwesomeIcon icon={faUpload} />
          <p>Upload file</p>
        </div>
      </div>

      {chatHistory ? (
        <div className="chat_history">
          <div className="history_section">
            <h3>Today</h3>
            {chatHistory["today"].map((history) => (
              <HistoryTitle key={history._id} history={history} />
            ))}
          </div>

          {chatHistory["thisWeek"].length > 0 && (
            <div className="history_section">
              <h3>This week</h3>
              {chatHistory["thisWeek"].map((history) => (
                <HistoryTitle key={history._id} history={history} />
              ))}
            </div>
          )}

          {chatHistory["thisMonth"].length > 0 && (
            <div className="history_section">
              <h3>This month</h3>
              {chatHistory["thisMonth"].map((history) => (
                <HistoryTitle key={history._id} history={history} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="loading"></div>
      )}
    </div>
  );
};

export default SideBar;
