import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zKezNprQdJJtZYak4YT6fxSX2x2gz5MAkw&usqp=CAU"
          alt=""
        />
        <span> Time</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zKezNprQdJJtZYak4YT6fxSX2x2gz5MAkw&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
