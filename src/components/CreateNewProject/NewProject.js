import React, { useState } from "react";
import Modal from "components/CreateNewProject/Modal";
import "./NewProject.css";

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
        <p>Add New Project</p>
        <button type="button" className="newProject__addIcon">
          +
        </button>
      </div>
      {smShow ? <Modal title="Create New Project" status={smShow} handleClose={handleClose} onSave={onSave} /> : ""}
    </>
  );
}

export default NewProject;
