import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faComment } from "@fortawesome/free-solid-svg-icons";
import HistoryTitle from "./HistoryTitle";
import { useSelector } from "react-redux";
import { historySelector } from "../../data/redux/selectors";

const SideBar = ({isOpen}) => {

  const chatHistory = useSelector(historySelector);
  console.log("chatHistory from Sender ~ 25", chatHistory);

  return (

    <div className={`bg-white p-4 left ${isOpen ? 'show' : 'hide'}`}>
      <div className="new_chat">
        <FontAwesomeIcon icon={faPlus} />
        <p>New chat</p>
      </div>
  
      {chatHistory ? 
        <div className="chat_history">
          <div className="history_section">
            <h3>Today</h3>
            {chatHistory['today'].map((history) => <HistoryTitle key={history._id} history={history}/>)}
          </div>
    
          <div className="history_section">
            <h3>This week</h3>
            {chatHistory['thisWeek'].map((history) => <HistoryTitle key={history._id} history={history}/>)}
          </div>

          <div className="history_section">
            <h3>This month</h3>
            {chatHistory['thisMonth'].map((history) => <HistoryTitle key={history._id} history={history}/>)}
          </div>
        </div>
        :
        <div className="loading"></div>
      }
    </div>
  )
};

export default SideBar;
