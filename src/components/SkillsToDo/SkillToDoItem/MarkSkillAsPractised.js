import React, { useState } from "react";
import { Button } from "react-bootstrap";
import OptionSelectModal from 'components/Modals/OptionSelectModal';

function MarkSkillAsPractised({skill={}, updatePractisedSkill = () => {}}) {
    const [smShow, setSmShow] = useState(false);

    
  const handleClose = () => setSmShow(false);
  const handleShow = () => setSmShow(true);

  const onSave = (difficulty) => {
      updatePractisedSkill(skill,difficulty)
      handleClose();
  }

    return (
        <>
        <Button onClick={handleShow}>Done</Button>
        {smShow ? <OptionSelectModal title="How did the practice feel?" status={smShow} handleClose={handleClose} onSave={onSave}/> : ""}
        </>
    );
}

export default MarkSkillAsPractised;
