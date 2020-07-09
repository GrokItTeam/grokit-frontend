import React from "react";
import "./Message.css";

function Message(props) {
  return (
    <div className="message">
      <p>Hello {props.name}your skills to practise today are... </p>
    </div>
  );
}
export default Message;
