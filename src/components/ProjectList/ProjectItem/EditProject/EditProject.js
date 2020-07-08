import React, { useState } from "react";
import SingleInputModal from "components/Modals/SingleInputModal";

function EditProject({ projectId, name, editProjectName = () => {} }) {
  const [smShow, setSmShow] = useState(false);

  const handleClose = () => setSmShow(false);
  const handleShow = () => setSmShow(true);

  const onSave = (projectName) => {
    editProjectName(projectId, projectName);
    handleClose();
  };

  return (
    <>
      <button type="button" className="primaryButton" onClick={handleShow}>
        Edit project
      </button>
      {smShow ? (
        <SingleInputModal
          title="Edit project name"
          placeholder="Enter new project name"
          startValue={name}
          status={smShow}
          handleClose={handleClose}
          onSave={onSave}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default EditProject;
