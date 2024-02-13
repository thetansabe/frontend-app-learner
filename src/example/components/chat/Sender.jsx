import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initHistory, initMessages, initSession, initUser } from "../../data/redux/actions";
import { sessionIdSelector, userInfoSelector } from "../../data/redux/selectors";
import { getChatbotHistories, sendMessage, getMessages } from "../../data/services/ChatbotService";
import { v4 as uuidv4 } from 'uuid';


const Sender = () => {
  
  const [message, setMessage] = useState("");
  const [isBlock, setIsBlock] = useState(false);

  const dispatch = useDispatch();

  const userInfo = useSelector(userInfoSelector);
  const sessionId = useSelector(sessionIdSelector);

  useEffect(async () => {
    try{
      if (!userInfo) return;

      if(!sessionId){
        const currSession = uuidv4();
        dispatch(initSession(currSession));
      }

      const messages = await getMessages(sessionId);
      dispatch(initMessages(messages));
      const histories = await getChatbotHistories(userInfo.userId);
      dispatch(initHistory(histories));

    }catch(e){
      console.log(e);
    }
  }, [message]);

  const handleSendMessage = async () => {
    setIsBlock(true);
    const res = await sendMessage({sessionId: sessionId.toString(), userId: userInfo.userId.toString(), text: message});
    setIsBlock(false);

    // clear text area
    setMessage("");
  };

  return (
    <div className={`chat_send ${isBlock ? 'blocking' : ''}`}>
      <div
        className="divtext"
        contentEditable={!isBlock}
        suppressContentEditableWarning={true}
        onBlur={e => {
          setMessage(e.target.textContent);
        }}
      >
        {message}
      </div>

      {isBlock ?
        <div className={`loading ${isBlock ? 'blocking' : ''}`}></div>
        :
        <div className="send_btn" onClick={handleSendMessage}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
      }
    </div>
  );
};

export default Sender;

/* <div className="chat_send">
            <textarea placeholder="Send your message"></textarea>
            <div className="send_btn">
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
          </div> */
