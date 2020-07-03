import React from "react";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import "./Forms.css";
function Forms() {
  return (
    <div className="forms">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Forms;
