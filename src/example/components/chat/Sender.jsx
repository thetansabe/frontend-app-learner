import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, initMessages } from "../../data/redux/actions";
import { userInfoSelector } from "../../data/redux/selectors";

const Sender = () => {
  
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const userInfo = useSelector(userInfoSelector);

  useEffect(async () => {
    try{
      const data = await axios.get(`${process.env.CHAT_BOT_URL}/all`);
      
      const validMessages = data.data.filter((message) => 
        message.sessionId === userInfo.sessionId
      );

      const messages = validMessages.map((message) => {
        if(message.sessionId !== userInfo.sessionId) return;
        return {
          sessionId: message.sessionId,
          text: message.response.text,
          timestamp: message.timestamp,
          isLiked: false,
        };
      });

      console.log(messages);
      const sortedByTimeMessages = messages.sort((a, b) => {a.timestamp - b.timestamp});
      
      dispatch(initMessages(sortedByTimeMessages));
    }catch(e){
      console.log(e);
    }
  }, [message]);

  const handleSendMessage = () => {
    console.log(
      `call ${process.env.CHAT_BOT_URL}/completion with message: ${message}`
    );

    
    // dispatch(addMessage({sessionId: 0, text: message, timestamp: Math.floor(Date.now() / 1000), isLiked: false}));

    // axios
    //   .post(`${process.env.CHAT_BOT_URL}/completion`, {
    //     sessionId: "0",
    //     text: message,
    //   })
    //   .then((response) => {
    //     console.log("success", response.data);
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });

    // clear text area
    setMessage("");
  };

  return (
    <div className="chat_send">
      <div
        className="divtext"
        contentEditable={true}
        suppressContentEditableWarning={true}
        onBlur={e => {
          setMessage(e.target.textContent);
        }}
      >
        {message}
      </div>
      <div className="send_btn" onClick={handleSendMessage}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
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
