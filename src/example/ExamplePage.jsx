import { Container } from "@edx/paragon";
import SideBar from "./components/sidebar/SideBar";
import Chat from "./components/chat/Chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ExamplePage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

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
