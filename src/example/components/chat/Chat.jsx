import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import Sender from "./Sender";

const Chat = () => (
  <div className="p-4 right">
    {/* Conversation */}
    <div>
      <UserMessage />

      <BotMessage />

      <UserMessage />

      <BotMessage />

      <UserMessage />

      <BotMessage />
    </div>

    {/* Sender */}
    <Sender />
  </div>
);

export default Chat;
