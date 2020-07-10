import React from "react";
import { useAppContext } from "libs/ContextLib.js";

import "./Message.scss";

function Message() {
  const { name } = useAppContext();

  return (
    <div className="message">
      <p>Hello {name} your skills to practise today are... </p>
    </div>
  );
}
export default Message;