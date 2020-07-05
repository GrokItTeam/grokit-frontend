import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { withRouter } from 'react-router-dom';

import { useFormFields } from "libs/HooksLib.js";
import { useAppContext } from "libs/ContextLib.js";
import { onError } from "libs/ErrorLib.js";
import "./SignUp.css";

function SignUp({history}) {
  const [newUser, setNewUser] = useState(null);
  const [newUsernameError, setNewUsernameError] = useState(false);
  const { setLoggedIn } = useAppContext();
  const [fields, handleFieldChange] = useFormFields({
    newName: "",
    newEmail: "",
    newPassword: "",
    confirmPassword: "",
    confirmationCode: "",
  });
  async function handleNewUserSubmit(event) {
    event.preventDefault();

    if (
      fields.newName === 0 ||
      fields.newEmail.length === 0 ||
      fields.newPassword.length === 0 ||
      fields.confirmPassword === 0 ||
      fields.newPassword !== fields.confirmPassword
    ) {
      setNewUsernameError(true);
    } else {
      try {
        const newUser = await Auth.signUp({
          username: fields.newEmail,
          password: fields.newPassword,
          attributes: { name: fields.newName },
        });
        setNewUser(newUser);
      } catch (error) {
        onError(error);
      }
    }
  }
  async function handleConfirmationSubmit(event) {
    event.preventDefault();
    try {
      await Auth.confirmSignUp(fields.newEmail, fields.confirmationCode);
      await Auth.signIn(fields.newEmail, fields.newPassword);
      setLoggedIn(true);
      history.push("/");
    } catch (e) {
      onError(e);
    }
  }

  function renderConfirmationForm() {
    return (
      <form onSubmit={handleConfirmationSubmit}>
        <Form.Group controlId="confirmationCode" bsSize="large">
          <Form.Label>Confirmation Code</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Confirmation Code"
            onChange={handleFieldChange}
            value={fields.confirmationCode}
          />
        </Form.Group>
        <Button block type="submit" bsSize="large">
          Verify
        </Button>
      </form>
    );
  }
  function renderForm() {
    return (
      <div>
        <Form className="border">
          <h2>Create an account</h2>
          <Form.Group controlId="newName">
            <Form.Label> Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={fields.newName}
              onChange={handleFieldChange}
            />
            {newUsernameError && (
              <Form.Text style={{ color: "red" }}>
                Please enter a valid name.
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId="newEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={fields.newEmail}
              onChange={handleFieldChange}
            />
            {newUsernameError && (
              <Form.Text style={{ color: "red" }}>
                Please enter a valid email.
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group controlId="newPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={fields.newPassword}
              onChange={handleFieldChange}
            />
            {newUsernameError && (
              <Form.Text style={{ color: "red" }}>
                Please enter a valid password.
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={fields.confirmPassword}
              onChange={handleFieldChange}
            />
            {newUsernameError && (
              <Form.Text style={{ color: "red" }}>
                Please enter a valid password.
              </Form.Text>
            )}
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            // disabled={!validateForm()}
            onClick={handleNewUserSubmit}
          >
            Sign up
          </Button>
        </Form>
      </div>
    );
  }
  return newUser === null ? renderForm() : renderConfirmationForm();
}

export default withRouter(SignUp);
