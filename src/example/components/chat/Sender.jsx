import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const Sender = () => {
  // handle contenteditable cursor position
  const textAreaRef = useRef(null);

  useEffect(() => {console.log("rerender");}, [textAreaRef.current]);

  const handleSendMessage = () => {
    console.log(`call ${process.env.CHAT_BOT_URL}/completion with message: ${textAreaRef.current}`);

    axios
      .post(`${process.env.CHAT_BOT_URL}/completion`, {
        sessionId: "0",
        text: textAreaRef.current,
      })
      .then((response) => {
        console.log("success", response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
    
    // clear text area
    textAreaRef.current = null;
  };

  return (
    <div className="chat_send">
      <div
        className="divtext"
        contentEditable={true}
        suppressContentEditableWarning={true}
        onInput={(e) => {
          textAreaRef.current = e.target.textContent;
          // console.log("e.target.value", textAreaRef.current);
        }}
      >
        {textAreaRef.current}
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
