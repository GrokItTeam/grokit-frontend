import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SingleInputModal from 'components/Modals/SingleInputModal';

function EditSkill({ skillId, name, editSkillName = () => {} }) {
    const [smShow, setSmShow] = useState(false);

    
  const handleClose = () => setSmShow(false);
  const handleShow = () => setSmShow(true);

  const onSave = (skillName) => {
      editSkillName(skillId, skillName);
      handleClose();
  }

    return (
        <>
        <Button onClick={handleShow}>Edit name</Button>
        {smShow ? <SingleInputModal title="Edit skill name" startValue={name} placeholder="Enter a new skill name" status={smShow} handleClose={handleClose} onSave={onSave}/> : ""}
        </>
    );
}

export default EditSkill;
