import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import Sender from "./Sender";
import { messagesSelector } from "../../data/redux/selectors";
import { useSelector } from "react-redux";

const Chat = () => {

  const messages = useSelector(messagesSelector);

  return (
    <div className="p-4 right">
      {/* Conversation */}
      <div>
        {messages.map((message, index) => <BotMessage key={index} content={{message, index}}/>)}
      </div>
  
      {/* Sender */}
      <Sender />
    </div>
  )
};

export default Chat;
