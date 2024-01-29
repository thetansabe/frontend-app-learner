import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const HistoryTitle = () => (
  <li className="chat_history-title">
    <FontAwesomeIcon icon={faComment} />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deserunt ab
      delectus eos architecto iusto blanditiis totam porro nisi laborum commodi
      voluptates minima, consequuntur ipsum fugiat, cupiditate hic fugit veniam?
    </p>
  </li>
);

export default HistoryTitle;
