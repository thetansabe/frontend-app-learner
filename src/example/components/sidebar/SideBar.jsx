import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faComment } from "@fortawesome/free-solid-svg-icons";
import HistoryTitle from "./HistoryTitle";

const SideBar = ({isOpen}) => (

  <div className={`bg-white p-4 left ${isOpen ? 'show' : 'hide'}`}>
    <div className="new_chat">
      <FontAwesomeIcon icon={faPlus} />
      <p>New chat</p>
    </div>

    <div className="chat_history">
      <div>
        <h3>Your favorites</h3>

        <ul>
          <HistoryTitle />
          <HistoryTitle />
          <HistoryTitle />
        </ul>
      </div>

      <div>
        <h3>History</h3>

        <ul>
          <HistoryTitle />
          <HistoryTitle />
          <HistoryTitle />
          <HistoryTitle />
          <HistoryTitle />
          <HistoryTitle />
          <HistoryTitle />
          <HistoryTitle />
          <HistoryTitle />
          <HistoryTitle />
          <HistoryTitle />
          <HistoryTitle />
        </ul>
      </div>
    </div>
  </div>
);

export default SideBar;
