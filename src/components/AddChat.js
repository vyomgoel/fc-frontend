import React from "react";
import { useContext, useState } from "react";
import chatContext from "../context/chat/chatContext";
const AddChat = (props) => {
  const context = useContext(chatContext);
  const { addChat } = context;
  const [chat, setchat] = useState({
    message: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    console.log("chat", chat);
    addChat(chat.message);
    setchat({
      message: "",
    });
    props.showAlert("chat Added", "success");
  };
  const onChange = (e) => {
    setchat({ ...chat, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container my-3">
        <form className="my-3">
          {/* <div className="mb-3">
            <label htmlFor="title" className="form-label">
              FromUserName
            </label>
            <input
              type="text"
              className="form-control"
              id="fromusername"
              name="fromusername"
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength={2}
              required
              value={chat.fromusername}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              FromUserId
            </label>
            <input
              type="text"
              className="form-control"
              id="fromuserid"
              name="fromuserid"
              onChange={onChange}
              minLength={2}
              required
              value={chat.fromuserid}
            />
          </div> */}
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              message
            </label>
            <input
              type="text"
              className="form-control"
              id="message"
              name="message"
              onChange={onChange}
              value={chat.tag}
            />
          </div>
          {/* <div className="mb-3">
            <label htmlFor="description" className="form-label">
              ToUserName
            </label>
            <input
              type="text"
              className="form-control"
              id="tousername"
              name="tousername"
              onChange={onChange}
              minLength={2}
              required
              value={chat.tousername}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              ToUserId
            </label>
            <input
              type="text"
              className="form-control"
              id="touserid"
              name="touserid"
              onChange={onChange}
              minLength={2}
              required
              value={chat.touserid}
            />
          </div> */}

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Send Chat
          </button>
        </form>
      </div>
    </>
  );
};

export default AddChat;
