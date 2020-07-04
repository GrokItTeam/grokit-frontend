import React, { useState } from "react";
import BootstrapModal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function SingleInputModal({ 
  startValue = "", 
  title = "", 
  placeholder = "",
  status = false, 
  handleClose = () => {}, 
  onSave = () => {} }) {

  const [value, setValue] = useState(startValue);

  const saveChanges = () => {
    onSave(value);
  };

  return (
    <BootstrapModal size="sm" show={status} onHide={handleClose} aria-labelledby="example-modal-sizes-title-sm">
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title id={title}>{title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <label>
          <input type="text" placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)} />
        </label>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={saveChanges} disabled={!value}>
          Save
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default SingleInputModal;
