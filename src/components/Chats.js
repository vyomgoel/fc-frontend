import React, { useContext, useEffect, useRef, useState } from "react";
import chatContext from "../context/chat/chatContext";

import { useNavigate } from "react-router-dom";
import AddChat from "./AddChat";
import ChatItem from "./ChatItem";

const Chats = (props) => {
  const context = useContext(chatContext);
  let navigate = useNavigate();
  const { chat, getChat } = context;

  const [Chats, setChats] = useState({
    // fromusername: "",
    // fromuserid: "",
    message: "",
    // tousername: "",
    // touserid: "",
  });
  console.log(chat);
  const onChange = (e) => {
    setChats({ ...Chats, [e.target.username]: e.target.value });
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getChat();
    } else {
      navigate("/login");
    }
    console.log(useEffect);
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);

  return (
    <>
      <div className="row">
        <h2>Your Chats</h2>

        {chat.map((item) => {
          return <ChatItem key={item._id} chat2={item} />;
        })}
      </div>
      <AddChat showAlert={props.showAlert} />
    </>
  );
};

export default Chats;
