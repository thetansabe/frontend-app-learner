import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { userInfoSelector } from "../../data/redux/selectors";

import {
  faCheckCircle,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const checkEven = (index) => index % 2 == 0;

const BotMessage = (props) => {
  const { message, index } = props.content;
  const userInfo = useSelector(userInfoSelector);

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(message.content)
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }

  return (
    <div className="bot_row">
      <div className="chat_owner">
        <div className="avatar">
          {checkEven(index) ? 
            <img src={userInfo.profileImage.imageUrlFull} alt="avatar" /> :
            <img src="https://kamimind.ai/kamimind_icon.svg" alt="avatar" />
          }
        </div>
      </div>
  
      <div className={`chat_content ${!checkEven(index) ? 'grey' : ''}`}>
        {message.content}
      </div>
  
      <div className="chat_option">
        {isCopied ? 
          <FontAwesomeIcon icon={faCheckCircle} /> 
          :
          <FontAwesomeIcon icon={faClipboard} onClick={handleCopy}/>
        }
      </div>
    </div>
  )
};

export default BotMessage;
