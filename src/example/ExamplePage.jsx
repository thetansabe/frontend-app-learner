import { Container } from "@edx/paragon";
import SideBar from "./components/sidebar/SideBar";
import Chat from "./components/chat/Chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
  getAuthenticatedUser, hydrateAuthenticatedUser,
} from '@edx/frontend-platform/auth';
import { initUser, initHistory } from "./data/redux/actions";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getChatbotHistories } from "./data/services/ChatbotService";

const ExamplePage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  useEffect(async () => {
    try{
      // ====== FOR INTEGRATED USAGE ======
      await hydrateAuthenticatedUser();
      const authenticatedUser = await getAuthenticatedUser();

      // const authenticatedUser = {
      //   "email": "thetannguyen193@gmail.com",
      //   "userId": 4,
      //   "username": "thetan_878",
      //   "administrator": false,
      //   "name": "thetan",
      //   "profileImage": {
      //     "hasImage": false,
      //     "imageUrlFull": "http://local.edly.io/static/images/profiles/default_500.4215dbe8010f.png",
      //   }
      // };
      // ===================================

      if (authenticatedUser) {
        dispatch(initUser(authenticatedUser));
        const history = await getChatbotHistories(authenticatedUser.userId);
        dispatch(initHistory(history));
      }
    }catch(e){
      console.log(e);
    }

  }, []);

  return (
    <main>
      <Container className="min-h-screen main">
        <div className="container">
          {/* Left */}
          <SideBar isOpen={isOpen}/>
  
          <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
            {isOpen ?
              <FontAwesomeIcon icon={faArrowRight} />
              :
              <FontAwesomeIcon icon={faArrowLeft} />  
            }
          </div>
  
          {/* Right */}
          <Chat />
        </div>
      </Container>
    </main>
  );
};

export default ExamplePage;
