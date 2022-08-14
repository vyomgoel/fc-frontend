import React, { useContext, useEffect, useRef, useState } from "react";
import userchatContext from "../context/userchat/userchatContext";

import { useNavigate } from "react-router-dom";
import UserChatitem from "./UserChatitem ";
import AddUserChat from "./AddUserChat";

import { Link } from "react-router-dom";

const UserChats = (props) => {
  const context = useContext(userchatContext);
  let navigate = useNavigate();
  const { userchats, getUserChat } = context;
  console.log("userchats", userchats);
  const [UserChats, setUserChats] = useState({
    username: "",
    lastmsg: "",
    lastmsgtime: "",
  });
  const onChange = (e) => {
    setUserChats({ ...UserChats, [e.target.username]: e.target.value });
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserChat();
    } else {
      navigate("/login");
    }
    console.log(useEffect);
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);

  return (
    <>
      <div className="d-block text-center my-3  ">
        <h2>Your UserChats</h2>

        {userchats.map((item) => {
          return (
            <Link to="/chats" key={item._id}>
              {" "}
              <UserChatitem userchat={item} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default UserChats;
