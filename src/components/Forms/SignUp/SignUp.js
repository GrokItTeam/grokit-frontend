import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { useFormFields } from "libs/HooksLib.js";
import { useAppContext } from "libs/ContextLib.js";
import { onError } from "libs/ErrorLib.js";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";

import "./SignUp.css";
import "../Forms.css";
>>>>>>> master

function SignUp({ history, setUserId = () => { } }) {
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
      const userInfo = await Auth.currentUserInfo();
      const user = { userId: userInfo.username, name: userInfo.attributes.name };
      axios
        .post("https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/users", user)
        .then(response => {
          setUserId(user.userId);
          setLoggedIn(true);
          history.push("/");
        })
        .catch(error => {
          console.log("Error fetching data", error);
        })
    } catch (e) {
      onError(e);
    }
  }

  function renderConfirmationForm() {
    return (
<<<<<<< HEAD
      <form onSubmit={handleConfirmationSubmit}>
        <Form.Group controlId="confirmationCode" bsSize="large">
          <Form.Label>Confirmation Code</Form.Label>
          <Form.Control type="tel" placeholder="Confirmation Code" onChange={handleFieldChange} value={fields.confirmationCode} />
        </Form.Group>
        <Button block type="submit" bsSize="large">
          Verify
=======
      <div className="forms">
        <Form onSubmit={handleConfirmationSubmit}>
          <Form.Group controlId="confirmationCode" bsSize="large">
            <Form.Label>Confirmation Code</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Confirmation Code"
              onChange={handleFieldChange}
              value={fields.confirmationCode}
            />
          </Form.Group>
          <Button block type="submit" bsSize="large" className="colour">
            Verify
>>>>>>> master
        </Button>
        </Form>
      </div>
    );
  }
  function renderForm() {
    return (
      <div className="forms">
        <Form className="border">
          <h2>Create an account</h2>
          <Form.Group controlId="newName">
            <Form.Label> Name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" value={fields.newName} onChange={handleFieldChange} />
            {newUsernameError && <Form.Text style={{ color: "red" }}>Please enter a valid name.</Form.Text>}
          </Form.Group>

          <Form.Group controlId="newEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={fields.newEmail} onChange={handleFieldChange} />
            {newUsernameError && <Form.Text style={{ color: "red" }}>Please enter a valid email.</Form.Text>}
          </Form.Group>
          <Form.Group controlId="newPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={fields.newPassword} onChange={handleFieldChange} />
            {newUsernameError && <Form.Text style={{ color: "red" }}>Please enter a valid password.</Form.Text>}
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" value={fields.confirmPassword} onChange={handleFieldChange} />
            {newUsernameError && <Form.Text style={{ color: "red" }}>Please enter a valid password.</Form.Text>}
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="colour"
            onClick={handleNewUserSubmit}
          >
            Sign up
          </Button>
          <div>
            <small>
              Already have an account? <Link to="/signin">Sign in</Link>
            </small>
          </div>
        </Form>
      </div>
    );
  }
  return newUser === null ? renderForm() : renderConfirmationForm();
}

export default withRouter(SignUp);
