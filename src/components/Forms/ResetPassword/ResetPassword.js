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
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);

  async function handleSendCodeClick(event) {
    event.preventDefault();
    try {
      await Auth.forgotPassword(fields.email);
      setCodeSent(true);
    } catch (error) {
      onError(error);
      setIsSendingCode(false);
    }
  }

  async function handleConfirmClick(event) {
    event.preventDefault();
    setIsConfirming(true);
    try {
      await Auth.forgotPasswordSubmit(
        fields.email,
        fields.code,
        fields.password
      );
      setConfirmed(true);
    } catch (error) {
      onError(error);
      setIsConfirming(false);
    }
  }
  function renderRequestCodeForm() {
    return (
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
        <Button block type="submit" bsSize="large">
          Send Confirmation
        </Button>
      </form>
    );
  }
  function renderConfirmationForm() {
    return (
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
            Please check your email ({fields.email}) for the confirmation code.
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
        <Button block type="submit" bsSize="large">
          Confirm
        </Button>
      </form>
    );
  }

  return !codeSent ? renderRequestCodeForm() : renderConfirmationForm();
}
export default ResetPassword;
