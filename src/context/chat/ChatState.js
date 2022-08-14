import ChatContext from "./chatContext";
import { useState } from "react";
const ChatState = (props) => {
  const host = "http://localhost:5000";
  const chatInitail = [];
  const [chat, setChat] = useState(chatInitail);
  //GET ALL NOTE
  const getChat = async () => {
    //API CALL

    const response = await fetch(`${host}/api/chat/fetchallchat`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log("All Chats", json);
    setChat(json);
  };
  //ADD A NOTE
  const addChat = async (username) => {
    try {
      const response = await fetch(`${host}/api/chat/chat`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },

        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjJmZGQyY2NhZmYyZDkyZTI3Yjg2ZCIsImlhdCI6MTY1NTg5NzYxNH0.GJ3zSZ42DdDZ_zMDYRZvlMXwMcPv_BfaU8v4leMTHqo",
        body: JSON.stringify({ username }),
      });
      console.log("add chatresponse", response);
      const userchat = await response.json();
      console.log("add chat api", userchat);

      setChat(chat.concat([userchat]));
      console.log("userchat", chat);
    } catch (e) {
      console.log("add note error", e);
    }

    //API CALL
  };

  return (
    <ChatContext.Provider value={{ chat, addChat, getChat }}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatState;
