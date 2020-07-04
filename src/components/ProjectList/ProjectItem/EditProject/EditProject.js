import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SingleInputModal from 'components/Modals/SingleInputModal';

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
            {smShow ? <SingleInputModal title="Edit project name" placeholder = "Enter new project name" startValue={name} status={smShow} handleClose={handleClose} onSave={onSave} /> : ""}
        </>
    );
}

export default EditProject;
