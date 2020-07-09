import React, { useState } from "react";
import BootstrapModal from "react-bootstrap/Modal";

function SingleInputModal({ startValue = "", title = "", placeholder = "", status = false, handleClose = () => {}, onSave = () => {} }) {
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
        <label className="Modal__label">
          <input className="Modal__input" type="text" placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
        </label>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <button type="button" className="secondaryButton darker" onClick={handleClose}>
          Cancel
        </button>
        <button type="button" className="primaryButton" onClick={saveChanges} disabled={!value}>
          Save
        </button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default SingleInputModal;
