import React from "react";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import ResetPassword from "./ResetPassword/ResetPassword";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import "./Forms.css";
function Forms() {
  let { path, url } = useRouteMatch();
  return (
    <div className="forms">
      <div>
        <Switch>
        <Route exact path={path}>
            <div>
              <p>
                Welcome to GrokIt, please click <Link to={`${url}/signin`}>here</Link> to
              Sign in
            </p>
            </div>
          </Route>
          <Route path={`${path}/signup`}>
            <SignUp />
          </Route>
          <Route path={`${path}/signin`}>
            <SignIn />
          </Route>
          <Route>
            <ResetPassword path={`${path}/resetpassword`}/>
          </Route>          
        </Switch>
      </div>
    </div>
  );
}

export default Forms;
