import { Container } from "@edx/paragon";
import SideBar from "./components/sidebar/SideBar";
import Chat from "./components/chat/Chat";

const handleInputMessage = (event) => {
  console.log(event.target.innerHTML);
};

const ExamplePage = () => (
  <main>
    <Container className="py-5 min-h-screen main">
      <div className="container">
        {/* Left */}
        <SideBar />

        {/* Right */}
        <Chat />
      </div>
    </Container>
  </main>
);

export default ExamplePage;
