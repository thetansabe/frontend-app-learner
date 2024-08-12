import { Container } from "@edx/paragon";
import SideBar from "./components/sidebar/SideBar";
import Chat from "./components/chat/Chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
  getAuthenticatedUser,
  hydrateAuthenticatedUser,
} from "@edx/frontend-platform/auth";
import { initUser, initHistory } from "./data/redux/actions";
import { useDispatch } from "react-redux";
import {
  getChatbotHistories,
  trainFiles,
} from "./data/services/ChatbotService";
import UploadModal from "./components/modal/UploadModal";
import { Toaster } from "react-hot-toast";
import UploadImage from "./components/modal/UploadImage";

const ExamplePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      // ====== FOR INTEGRATED USAGE ======
      await hydrateAuthenticatedUser();
      const authenticatedUser = await getAuthenticatedUser();

      // const authenticatedUser = {
      //   email: "thetannguyen193@gmail.com",
      //   userId: 40,
      //   username: "thetan_878",
      //   administrator: false,
      //   name: "thetan",
      //   profileImage: {
      //     hasImage: false,
      //     imageUrlFull:
      //       "http://local.edly.io/static/images/profiles/default_500.4215dbe8010f.png",
      //   },
      // };
      // ===================================

      if (authenticatedUser) {
        dispatch(initUser(authenticatedUser));
        const history = await getChatbotHistories(authenticatedUser.userId);
        dispatch(initHistory(history));
        await trainFiles(authenticatedUser.userId);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <main>
      <div>
        <Toaster />
      </div>

      {isDialogOpen === 1 && (
        <div id="myModal" className="myModal">
          <div className="modal-content">
            <button onClick={() => setIsDialogOpen(0)} className="modal-close">
              Close
            </button>
            <UploadModal />
          </div>
        </div>
      )}

      {isDialogOpen === 2 && (
        <div id="myModal" className="myModal">
          <div className="modal-content">
            <button onClick={() => setIsDialogOpen(0)} className="modal-close">
              Close
            </button>
            <UploadImage />
          </div>
        </div>
      )}

      <Container className="min-h-screen main">
        <div className="container">
          {/* Left */}
          <SideBar isOpen={isOpen} setIsDialogOpen={setIsDialogOpen} />

          <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faArrowRight} />
            ) : (
              <FontAwesomeIcon icon={faArrowLeft} />
            )}
          </div>

          {/* Right */}
          <Chat />
        </div>
      </Container>
    </main>
  );
};

export default ExamplePage;
