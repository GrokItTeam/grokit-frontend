import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Form, Button } from "react-bootstrap";
import { useFormFields } from "libs/HooksLib.js";
import { useAppContext } from "libs/ContextLib.js";
import { onError } from "libs/ErrorLib.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function SignIn() {
  const { setLoggedIn } = useAppContext();
  const [usernameError, setUsernameError] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
  });
  async function handleSignInSubmit(e) {
    e.preventDefault();

    if (fields.email.length === 0 || fields.password.length === 0) {
      setUsernameError(true);
    } else {
      try {
        await Auth.signIn(fields.email, fields.password);
        setLoggedIn(true);
      } catch (e) {
        onError(e);
      }
    }
  }
  return (
    <div>
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
          {usernameError && (
            <Form.Text style={{ color: "red" }}>
              Please enter a valid email.
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
          {usernameError && (
            <Form.Text style={{ color: "red" }}>
              Please enter a valid password.
            </Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSignInSubmit}>
          Sign In
        </Button>
        <div>
          <small>
            Forgot password? <Link to="/resetpassword">Reset password</Link>
          </small>
        </div>
        <div>
          <small>
            No account? Create an <Link to="/signup">account</Link>
          </small>
        </div>
      </Form>
    </div>
  );
}
export default SignIn;
