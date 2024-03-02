import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { initMessages, initSession } from "../../data/redux/actions";
import { getMessages } from "../../data/services/ChatbotService";

const HistoryTitle = ({history}) => {

  const { sessionId, content } = history;
  const dispatch = useDispatch();

  const openHistory = (sessionId) => async () => {
    const messages = await getMessages(sessionId);
    dispatch(initMessages(messages));
    dispatch(initSession(sessionId));
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
