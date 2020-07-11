import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Form, Spinner } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import emailValidator from "email-validator";

import { useFormFields } from "libs/HooksLib.js";
import { useAppContext } from "libs/ContextLib.js";
import { onError } from "libs/ErrorLib.js";

function SignIn({ history }) {
  const { setLoggedIn, setUserId, setName } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({
    email: { error: false, message: "Please enter a valid email." },
    password: { error: false, message: "Please enter a valid password." },
  });
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
  });

  function clearValidationErrors() {
    const updatedValidationError = Object.assign({}, validationError);
    updatedValidationError.email.error = false;
    updatedValidationError.password.error = false;
    setValidationError(updatedValidationError);
  }

  async function handleSignInSubmit(e) {
    e.preventDefault();
    clearValidationErrors();

    if (
      fields.email.length === 0 ||!emailValidator.validate(fields.email)
    ) {
      const updatedValidationError = Object.assign({}, validationError);
      updatedValidationError.email.error = true;
      setValidationError(updatedValidationError);
    }
    if (fields.password.length < 8) {
      const updatedValidationError = Object.assign({}, validationError);
      updatedValidationError.password.error = true;
      setValidationError(updatedValidationError);
    } else {
      setIsLoading(true);
      try {
        await Auth.signIn(fields.email, fields.password);
        const userInfo = await Auth.currentUserInfo();
        setLoggedIn(true);
        setUserId(userInfo.username);
        setName(userInfo.attributes.name);
        history.push("/grokit-frontend/");
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
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
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={fields.email}
            onChange={handleFieldChange}
          />
          {validationError.email.error && (
            <Form.Text style={{ color: "red" }}>
              {validationError.email.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={fields.password}
            onChange={handleFieldChange}
          />
          {validationError.password.error && (
            <Form.Text style={{ color: "red" }}>
              {validationError.password.message}
            </Form.Text>
          )}
        </Form.Group>

        <button
          type="submit"
          className="primaryButton"
          onClick={handleSignInSubmit}
        >
          {isLoading && <Spinner className="spinner-button" animation="border" role="status" size="sm"/>} Sign In
        </button>

        <div>
          <small>
            Forgot password?{" "}
            <Link to="/grokit-frontend/resetpassword">Reset password</Link>
          </small>
        </div>
        <div>
          <small>
            No account? Create an{" "}
            <Link to="/grokit-frontend/signup">account</Link>
          </small>
        </div>
      </Form>
    </div>
  );
}
export default withRouter(SignIn);
