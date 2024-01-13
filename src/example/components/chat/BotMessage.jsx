import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const BotMessage = () => (
  <div className="bot_row">
    <div className="chat_owner">
      <div className="avatar">
        <img src="https://kamimind.ai/kamimind_icon.svg" alt="avatar" />
      </div>
    </div>

    <div className="chat_content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ad quae
      quia sunt natus facere cum cupiditate quibusdam doloribus totam
      repellendus neque! Libero rerum dolores dolorem consequuntur, sapiente
      odio! Ratione.
    </div>

    <div className="chat_option">
      <FontAwesomeIcon icon={faClipboard} />
      <FontAwesomeIcon icon={faStar} />
    </div>
  </div>
);

export default BotMessage;
