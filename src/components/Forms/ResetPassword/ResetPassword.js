import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useFormFields } from "libs/HooksLib.js";
import { Form, Button } from "react-bootstrap";
import { onError } from "libs/ErrorLib.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./ResetPassword.css";
function ResetPassword() {
  const [fields, handleFieldChange] = useFormFields({
    code: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [codeSent, setCodeSent] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  async function handleSendCodeClick(event) {
    event.preventDefault();
    try {
      await Auth.forgotPassword(fields.email);
      setCodeSent(true);
    } catch (error) {
      onError(error);
    }
  }

  async function handleConfirmClick(event) {
    event.preventDefault();
    try {
      await Auth.forgotPasswordSubmit(
        fields.email,
        fields.code,
        fields.password
      );
      setConfirmed(true);
    } catch (error) {
      onError(error);
    }
  }
  function renderRequestCodeForm() {
    return (
      <div className="border">
        <form onSubmit={handleSendCodeClick}>
          <Form.Group bsSize="large" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <Button block type="submit" bsSize="large" className="colour">
            Send Confirmation
          </Button>
        </form>
      </div>
    );
  }
  function renderConfirmationForm() {
    return (
      <div className="border">
        <form onSubmit={handleConfirmClick}>
          <Form.Group bsSize="large" controlId="code">
            <Form.Label>Confirmation Code</Form.Label>
            <Form.Control
              autoFocus
              type="tel"
              value={fields.code}
              onChange={handleFieldChange}
            />
            <div>
              Please check your email ({fields.email}) for the confirmation
              code.
            </div>
          </Form.Group>
          <hr />
          <Form.Group bsSize="large" controlId="password">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              value={fields.password}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <Form.Group bsSize="large" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={fields.confirmPassword}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <Button block type="submit" bsSize="large" className="colour">
            Confirm
          </Button>
        </form>
      </div>
    );
  }
  function renderSuccessMessage() {
    return (
      <div className="success">
        <p>Your password has been reset.</p>
        <p>
          Click <Link to="/signin">here </Link>to sign in with your new
          password.
        </p>
      </div>
    );
  }

  return (
    <div className="ResetPassword">
      {!codeSent
        ? renderRequestCodeForm()
        : !confirmed
        ? renderConfirmationForm()
        : renderSuccessMessage()}
    </div>
  );
}
export default ResetPassword;
