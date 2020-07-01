import React, { useState } from "react";
import BootstrapModal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Modal({ 
  name = "", 
  title = "", 
  status = false, 
  handleClose = () => {}, 
  onSave = () => {} }) {

  const [skillName, setSkillName] = useState(name);

  const saveChanges = () => {
    onSave(skillName);
  };

  return (
    <BootstrapModal size="sm" show={status} onHide={handleClose} aria-labelledby="example-modal-sizes-title-sm">
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title id={title}>{title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <label>
          <input type="text" placeholder="Enter new skill name" value={skillName} name="name" onChange={e => setSkillName(e.target.value)} />
        </label>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={saveChanges} disabled={!skillName}>
          Save
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default Modal;
