import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
import axios from "axios";
import passwordValidator from "password-validator";
import emailValidator from "email-validator";

import { useFormFields } from "libs/HooksLib.js";
import { useAppContext } from "libs/ContextLib.js";
import { onError } from "libs/ErrorLib.js";
import { Link } from "react-router-dom";

const passwordSchema = new passwordValidator();
passwordSchema
  .is()
  .min(8)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .symbols();

function SignUp({ history }) {
  const [newUser, setNewUser] = useState(null);
  const [validationError, setValidationError] = useState({
    name: { error: false, message: "Please enter a name." },
    email: { error: false, message: "Please enter a valid email." },
    password: {
      error: false,
      message:
        "Please enter a valid password. Required: 8 characters, lowercase, uppercase, special characters, numbers.",
    },
    confirmPassword: { error: false, message: "Passwords do not match." },
  });

  const { setLoggedIn, setUserId, setName } = useAppContext();
  const [fields, handleFieldChange] = useFormFields({
    newName: "",
    newEmail: "",
    newPassword: "",
    confirmPassword: "",
    confirmationCode: "",
  });

  function clearValidationErrors() {
    const updatedValidationError = Object.assign({}, validationError);
    updatedValidationError.name.error = false;
    updatedValidationError.email.error = false;
    updatedValidationError.password.error = false;
    updatedValidationError.confirmPassword.error = false;
    setValidationError(updatedValidationError);
  }

  async function handleNewUserSubmit(event) {
    event.preventDefault();
    clearValidationErrors();

    if (fields.newName.length === 0) {
      const updatedValidationError = Object.assign({}, validationError);
      updatedValidationError.name.error = true;
      setValidationError(updatedValidationError);
    }
    if (
      fields.newEmail.length === 0 || !emailValidator.validate(fields.newEmail)
    ) {
      const updatedValidationError = Object.assign({}, validationError);
      updatedValidationError.email.error = true;
      setValidationError(updatedValidationError);
    }
    if (!passwordSchema.validate(fields.newPassword)) {
      const updatedValidationError = Object.assign({}, validationError);
      updatedValidationError.password.error = true;
      setValidationError(updatedValidationError);
    }
    if (fields.newPassword !== fields.confirmPassword) {
      const updatedValidationError = Object.assign({}, validationError);
      updatedValidationError.confirmPassword.error = true;
      setValidationError(updatedValidationError);
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
      const user = {
        userId: userInfo.username,
        name: userInfo.attributes.name,
      };
      axios
        .post(
          "https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/users",
          user
        )
        .then((response) => {
          setUserId(user.userId);
          setName(user.name);
          setLoggedIn(true);
          history.push("/grokit-frontend/");
        })
        .catch((error) => {
          console.log("Error fetching data", error);
        });
    } catch (e) {
      onError(e);
    }
  }

  function renderConfirmationForm() {
    return (
      <div className="forms">
        <Form onSubmit={handleConfirmationSubmit}>
          <Form.Group controlId="confirmationCode" bsSize="large">
            <Form.Label className="forms__confirmationTitle">
              Confirmation Code
            </Form.Label>
            <Form.Text className="forms__confirmationText">
              We have just sent you a confirmation code, please check your email
            </Form.Text>
            <Form.Control
              type="tel"
              placeholder="Confirmation Code"
              onChange={handleFieldChange}
              value={fields.confirmationCode}
            />
          </Form.Group>
          <Button block type="submit" bsSize="large" className="primaryButton">
            Verify
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
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={fields.newName}
              onChange={handleFieldChange}
            />
            {validationError.name.error && (
              <Form.Text style={{ color: "red" }}>
                {validationError.name.message}
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
            {validationError.email.error && (
              <Form.Text style={{ color: "red" }}>
                {validationError.email.message}
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
            {validationError.password.error && (
              <Form.Text style={{ color: "red" }}>
                {validationError.password.message}
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
            {validationError.confirmPassword.error && (
              <Form.Text style={{ color: "red" }}>
                {validationError.confirmPassword.message}
              </Form.Text>
            )}
          </Form.Group>

          <button
            type="submit"
            className="primaryButton"
            onClick={handleNewUserSubmit}
          >
            Sign up
          </button>
          <div>
            <small>
              Already have an account?{" "}
              <Link to="/grokit-frontend/signin">Sign in</Link>
            </small>
          </div>
        </Form>
      </div>
    );
  }
  return newUser === null ? renderForm() : renderConfirmationForm();
}

export default withRouter(SignUp);
