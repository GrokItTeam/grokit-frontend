import React from "react";
import { useAppContext } from "libs/ContextLib.js";

function Message() {
  const { name } = useAppContext();

  return (
    <div className="message">
      <h4>Hello {name} your skills to practise today are... </h4>
    </div>
  );
}
export default Message;
