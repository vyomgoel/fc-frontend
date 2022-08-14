import { React } from "react";

const ChatItem = (props) => {
  const { contacts } = props;

  return (
    <div className="text-center ">
      <div className="card my-3">
        <div className="border border-warning">
          <h5 className="card-title my-2"> {contacts.name}</h5>
          <p className="card-title font-italic my-2"> {contacts.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
