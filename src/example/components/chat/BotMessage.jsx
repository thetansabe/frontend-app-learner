import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

const checkEven = (index) => index % 2 == 0;

const BotMessage = (props) => {
  const { message, index } = props.content;

  return (
    <div className="bot_row">
      <div className="chat_owner">
        <div className="avatar">
          {checkEven(index) ? 
            <img src="https://i.pravatar.cc/300" alt="avatar" /> :
            <img src="https://kamimind.ai/kamimind_icon.svg" alt="avatar" />
          }
        </div>
      </div>
  
      <div className={`chat_content ${!checkEven(index) ? 'grey' : ''}`}>
        {message.text}
      </div>
  
      <div className="chat_option">
        <FontAwesomeIcon icon={faClipboard} />
      </div>
    </div>
  )
};

export default BotMessage;
