import React, { useState } from "react";
import BootstrapModal from "react-bootstrap/Modal";

function Modal({ title = "", status = false, handleClose = () => {}, onSave = () => {} }) {
  const [project, setProject] = useState({});

  const updateProject = ({ target: { value = "", name = "" } = {} }) => {
    setProject({ ...project, [name]: value });
  };

  const saveChanges = () => {
    onSave(project);
  };

  const { name } = project;

  return (
    <BootstrapModal size="sm" show={status} onHide={handleClose} aria-labelledby="example-modal-sizes-title-sm">
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title id="example-modal-sizes-title-sm">{title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <label>
          <input type="text" placeholder="Enter project name" value={name} name="name" onChange={updateProject} />
        </label>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <button type="button" className="secondaryButton" onClick={handleClose}>
          Cancel
        </button>
        <button type="button" className="primaryButton" onClick={saveChanges} disabled={!name}>
          Save
        </button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default Modal;
