import React, { useState } from "react";
import { Button } from "react-bootstrap";
import EditProjectModal from './EditProjectModal';

function EditProject({ projectId, name, editProjectName = () => {} }) {
    const [smShow, setSmShow] = useState(false);


    const handleClose = () => setSmShow(false);
    const handleShow = () => setSmShow(true);

    const onSave = (projectName) => {
        editProjectName(projectId, projectName);
        handleClose();
    }

    return (
        <>
            <Button onClick={handleShow}>Edit name</Button>
            {smShow ? <EditProjectModal title="Edit project name" name={name} status={smShow} handleClose={handleClose} onSave={onSave} /> : ""}
        </>
    );
}

export default EditProject;
