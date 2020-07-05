import React from "react";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import ResetPassword from "./ResetPassword/ResetPassword";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Forms.css";
function Forms() {
  return (
    <div className="forms">
      <Router>
        <div>
          <div>
            <p>
              Welcome to GrokIt, please click <Link to="/signin">here</Link> to
              Sign in
            </p>
          </div>
          {/* <div>
            <Link to="/signup">SignUp</Link>
          </div> */}
          {/* <Route exact path="/default-path" component={SignIn} /> */}
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route>
              <ResetPassword />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Forms;
