import BotMessage from "./BotMessage";
import Sender from "./Sender";
import { messagesSelector } from "../../data/redux/selectors";
import { useSelector } from "react-redux";
import Menu from "./Menu";

const Chat = () => {

  const messages = useSelector(messagesSelector);

  return (
    <div className="p-4 right">
      {/* Conversation */}
      <div>
        { messages ? 
            messages.map((message, index) => <BotMessage key={message.id} content={{message, index}}/>)
            :
            <Menu/>
        }
      </div>
  
      {/* Sender */}
      <Sender />
    </div>
  )
};

export default Chat;
