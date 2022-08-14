import { React } from "react";

const ChatItem = (props) => {
  const { chat2 } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <p className="card-title">{chat2.message}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
