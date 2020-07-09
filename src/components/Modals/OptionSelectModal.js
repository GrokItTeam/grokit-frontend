import React from "react";
import BootstrapModal from "react-bootstrap/Modal";

function OptionSelectModal({ 
  title = "", 
  status = false, 
  handleClose = () => {}, 
  onSave = () => {} }) {


  const saveChanges = (difficulty) => {
    onSave(difficulty);
  };

  return (
    <BootstrapModal size="sm" show={status} onHide={handleClose} aria-labelledby="example-modal-sizes-title-sm">
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title id={title}>{title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Footer>
        <button className="primaryButton" onClick={() => saveChanges("easy")}>
          Easy
        </button>
        <button className="primaryButton" onClick={() => saveChanges("medium")}>
          Normal
        </button>
        <button className="primaryButton" onClick={() => saveChanges("hard")}>
          Hard
        </button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default OptionSelectModal;
