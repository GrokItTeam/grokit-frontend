import React, { useState, useEffect } from "react";
import BootstrapModal from "react-bootstrap/Modal";

function Modal({ title = "", status = false, handleClose = () => { }, onSave = () => { } }) {
  const [project, setProject] = useState({});

  const updateProject = ({ target: { value = "", name = "" } = {} }) => {
    setProject({ ...project, [name]: value });
  };

  const saveChanges = () => {
    onSave(project);
  };

  const { name = "" } = project;

  let toInput = React.createRef();

  useEffect(() => {
    toInput.focus();
  }, [toInput])

  return (
    <BootstrapModal size="sm" show={status} onHide={handleClose} aria-labelledby="example-modal-sizes-title-sm">
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title id="example-modal-sizes-title-sm">{title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body autoFocus>
        <label className="Modal__label">
          <input 
            ref={el => { toInput = el }} 
            className="Modal__input" 
            type="text" 
            placeholder="Enter project name" 
            value={name} name="name" 
            onChange={updateProject} 
            onKeyPress={({key, event}) => key === "Enter" ? saveChanges() : null}
            />
        </label>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <button type="button" className="secondaryButton darker" onClick={handleClose}>
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
