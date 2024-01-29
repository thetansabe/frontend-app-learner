import { Container } from "@edx/paragon";
import SideBar from "./components/sidebar/SideBar";
import Chat from "./components/chat/Chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
  fetchAuthenticatedUser,
} from '@edx/frontend-platform/auth';

const ExamplePage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  useEffect(async () => {
    const jwtHeaderCookie = document.cookie;

    console.log("all cookies", jwtHeaderCookie);


    const authenticatedUser = await fetchAuthenticatedUser();
    console.log("authenticated user: ", authenticatedUser);
  }, []);

  return (
    <main>
      <Container className="py-5 min-h-screen main">
        <div className="container">
          {/* Left */}
          <SideBar isOpen={isOpen}/>
  
          <div className="hamburger" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars}/>
          </div>
  
          {/* Right */}
          <Chat />
        </div>
      </Container>
    </main>
  );
};

export default ExamplePage;
