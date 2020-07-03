import React, { useState } from "react";
import BootstrapModal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function EditProjectModal({ 
  name = "", 
  title = "", 
  status = false, 
  handleClose = () => {}, 
  onSave = () => {} }) {

  const [projectName, setProjectName] = useState(name);

  const saveChanges = () => {
    onSave(projectName);
  };

  return (
    <BootstrapModal size="sm" show={status} onHide={handleClose} aria-labelledby="example-modal-sizes-title-sm">
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title id={title}>{title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <label>
          <input type="text" placeholder="Enter new skill name" value={projectName} name="name" onChange={e => setProjectName(e.target.value)} />
        </label>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={saveChanges} disabled={!projectName}>
          Save
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default EditProjectModal;
