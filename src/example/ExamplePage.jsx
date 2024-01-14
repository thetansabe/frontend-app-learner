import { Container } from "@edx/paragon";
import SideBar from "./components/sidebar/SideBar";
import Chat from "./components/chat/Chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";

const handleInputMessage = (event) => {
  console.log(event.target.innerHTML);
};

const ExamplePage = () => (
  <main>
    <Container className="py-5 min-h-screen main">
      <div className="container">
        {/* Left */}
        <SideBar />

        <div className="hamburger">
          <FontAwesomeIcon icon={faBars}/>
        </div>

        {/* Right */}
        <Chat />
      </div>
    </Container>
  </main>
);

export default ExamplePage;
