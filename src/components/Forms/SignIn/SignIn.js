import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import { useFormFields } from "libs/HooksLib.js";
import { useAppContext } from "libs/ContextLib.js";
import { onError } from "libs/ErrorLib.js";
import { Link } from "react-router-dom";

function SignIn({ history }) {
  const { setLoggedIn, setUserId } = useAppContext();
  const [validationError, setValidationError] = useState(
    {email: {error: false, message: "Please enter a valid email."},
    password: {error: false, message: "Please enter a valid password."}});
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
  });

  function clearValidationErrors() {  
    const updatedValidationError = Object.assign({},validationError);
    updatedValidationError.email.error = false;
    updatedValidationError.password.error = false;
    setValidationError(updatedValidationError);
  }
  
  async function handleSignInSubmit(e) {
    e.preventDefault();
    clearValidationErrors();


    if (fields.email.length === 0 || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(fields.email)) {
      const updatedValidationError = Object.assign({},validationError);
      updatedValidationError.email.error = true;
      setValidationError(updatedValidationError);
    } 
    if (fields.password.length < 8) {
      const updatedValidationError = Object.assign({},validationError);
      updatedValidationError.password.error = true;
      setValidationError(updatedValidationError);
    } 
    else {
      try {
        await Auth.signIn(fields.email, fields.password);
        const userInfo = await Auth.currentUserInfo();
        setLoggedIn(true);
        setUserId(userInfo.username);
        history.push("/grokit-frontend/");
      } catch (e) {
        onError(e);
      }
    }
  }
  return (
    <div className="forms">
      <Form className="border">
        <h2>Please Sign in</h2>
        <Form.Group controlId="email">
          <Form.Label className="size">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={fields.email} onChange={handleFieldChange} />
          {validationError.email.error && <Form.Text style={{ color: "red" }}>{validationError.email.message}</Form.Text>}
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={fields.password} onChange={handleFieldChange} />
          {validationError.password.error && <Form.Text style={{ color: "red" }}>{validationError.password.message}</Form.Text>}
        </Form.Group>

        <button type="submit" className="primaryButton" onClick={handleSignInSubmit}>
          Sign In
        </button>

        <div>
          <small>
            Forgot password? <Link to="/grokit-frontend/resetpassword">Reset password</Link>
          </small>
        </div>
        <div>
          <small>
            No account? Create an <Link to="/grokit-frontend/signup">account</Link>
          </small>
        </div>
      </Form>
    </div>
  );
}
export default withRouter(SignIn);
