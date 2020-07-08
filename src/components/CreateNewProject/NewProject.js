import React, { useState } from "react";
import Modal from "components/CreateNewProject/Modal";

function NewProject({ addProject = () => {} }) {
  const [smShow, setSmShow] = useState(false);

  const handleClose = () => setSmShow(false);
  const handleShow = () => setSmShow(true);

  const onSave = (project) => {
    addProject(project);
    handleClose();
  };

  return (
    <>
      <div className="newProject" onClick={handleShow}>
        <button type="button" className="primaryButton">
          Add New Project +
        </button>
      </div>
      {smShow ? <Modal title="Create New Project" status={smShow} handleClose={handleClose} onSave={onSave} /> : ""}
    </>
  );
}

export default NewProject;
