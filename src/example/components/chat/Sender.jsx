import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Sender = () => (
  <div className="chat_send">
    <div className="divtext" contentEditable>
      Send your message
    </div>
    <div className="send_btn">
      <FontAwesomeIcon icon={faPaperPlane} />
    </div>
  </div>
);

export default Sender;

/* <div className="chat_send">
            <textarea placeholder="Send your message"></textarea>
            <div className="send_btn">
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
          </div> */
