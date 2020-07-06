import React from "react";
import BootstrapModal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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
        <Button variant="success" onClick={() => saveChanges("easy")}>
          Easy
        </Button>
        <Button variant="success" onClick={() => saveChanges("medium")}>
          Normal
        </Button>
        <Button variant="success" onClick={() => saveChanges("hard")}>
          Hard
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default OptionSelectModal;
