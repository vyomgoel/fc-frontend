import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import FlashCards from "./components/flashcards";
import UserChatState from "./context/userchat/UserChatState";
import ContactState from "./context/contact/ContactState";
import ChatState from "./context/chat/ChatState";
import Chats from "./components/Chats";
import Contacts from "./components/Contacts";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  return (
    <>
      <NoteState>
        <UserChatState>
          <ChatState>
            <ContactState>
              <BrowserRouter>
                <Navbar />
                <Alert alert={alert} />
                <div className="container">
                  <Routes>
                    <Route path="/" element={<Home showAlert={showAlert} />} />
                    <Route path="/about" element={<About />} />
                    <Route
                      path="/login"
                      element={<Login showAlert={showAlert} />}
                    />
                    <Route path="/flashcards" element={<FlashCards />} />
                    <Route
                      path="/signup"
                      element={<Signup showAlert={showAlert} />}
                    />
                    <Route
                      path="/chats"
                      element={<Chats showAlert={showAlert} />}
                    />
                    <Route
                      path="/contacts"
                      element={<Contacts showAlert={showAlert} />}
                    />
                  </Routes>
                </div>
              </BrowserRouter>
            </ContactState>
          </ChatState>
        </UserChatState>
      </NoteState>
    </>
  );
}

export default App;
