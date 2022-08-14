import React from "react";
import { useContext, useState } from "react";
import userchatContext from "../context/userchat/userchatContext";
const AddUserChat = (props) => {
  const context = useContext(userchatContext);
  const { UserChat } = context;
  const [userchat, setUserChat] = useState({
    username: "",
    lastmsg: "",
  });
  let handleClick = (e) => {
    console.log("userchat", userchat);
    UserChat(userchat.username, userchat.lastmsg, userchat.lastmsgtime);
    setUserChat({ username: "", lastmsg: "", lastmsgtime: "" });
    props.showAlert("userchat added", "success");
  };
  const onChange = (e) => {
    setUserChat({ ...userchat, [e.target.username]: e.target.value });
  };

  return (
    <>
      <div className="container my-3">
        <h2>Add a UserChat</h2>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Userchat
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              aria-describedby="emailHelp"
              minLength={2}
              required
              value={userchat.username}
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add FlashCard
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUserChat;
