import UserChatContext from "./userchatContext";
import { useState } from "react";
import { BACKEND_URI } from "../../../const";
const UserChatState = (props) => {
  const host = BACKEND_URI;
  const notesInitial = [];
  const [userchats, setUserChats] = useState(notesInitial);
  //GET ALL NOTE
  const getUserChat = async () => {
    //API CALL

    const response = await fetch(`${host}/api/userchat/fetchalluserschat`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log("All Notes", json);
    setUserChats(json);
  };
  //ADD A NOTE
  const addUserChat = async (username) => {
    //TODO API CALL
    //API
    try {
      const response = await fetch(`${host}/api/userchat/userchat`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },

        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjJmZGQyY2NhZmYyZDkyZTI3Yjg2ZCIsImlhdCI6MTY1NTg5NzYxNH0.GJ3zSZ42DdDZ_zMDYRZvlMXwMcPv_BfaU8v4leMTHqo",
        body: JSON.stringify({ username }),
      });
      console.log("add note response", response);
      const userchat = await response.json();
      console.log("add userchat api", userchat);

      setUserChats(userchats.concat([userchat]));
      console.log("userchat", userchats);
    } catch (e) {
      console.log("add note error", e);
    }

    //API CALL
  };

  return (
    <UserChatContext.Provider value={{ userchats, addUserChat, getUserChat }}>
      {props.children}
    </UserChatContext.Provider>
  );
};

export default UserChatState;
