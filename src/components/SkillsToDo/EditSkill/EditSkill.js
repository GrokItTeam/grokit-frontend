import React, { useState } from "react";
import { Button } from "react-bootstrap";
import EditSkillModal from './EditSkillModal';

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
        {smShow ? <EditSkillModal title="Edit skill name" name={name} status={smShow} handleClose={handleClose} onSave={onSave}/> : ""}
        </>
    );
}

export default EditSkill;
