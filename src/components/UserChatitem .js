import { React } from "react";

const UserChatitem = (props) => {
  const { userchat } = props;

  return (
    <div className="text-center">
      <div className="card my-3">
        <div className="border border-warning">
          <h5 className=" text-dark my-2">{userchat.username}</h5>
          <p className=" text-dark my-2">{userchat.lastmsg}</p>
          <p className=" text-dark my-2 ">{userchat.lastmsgtime}</p>
        </div>
      </div>
    </div>
  );
};

export default UserChatitem;
