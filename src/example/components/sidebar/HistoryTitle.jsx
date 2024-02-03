import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const HistoryTitle = ({history}) => {

  const { sessionId, content } = history;

  const openHistory = (sessionId) => () => {
    console.log(`open history with sessionId: ${sessionId}`);
  };

  return (
    <li className="chat_history-title" onClick={openHistory(sessionId)}>
      <FontAwesomeIcon icon={faComment} />
      <p>
        {content}
      </p>
    </li>
  );
};

export default HistoryTitle;
