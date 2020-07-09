import React, { useState } from "react";
import SingleInputModal from "components/Modals/SingleInputModal";

function EditSkill({ skillId, name, editSkillName = () => {} }) {
  const [smShow, setSmShow] = useState(false);

  const handleClose = () => setSmShow(false);
  const handleShow = () => setSmShow(true);

  const onSave = (skillName) => {
    editSkillName(skillId, skillName);
    handleClose();
  };

  return (
    <>
      <button type="button" className="primaryButton" onClick={handleShow}>
        Edit skill
      </button>
      {smShow ? (
        <SingleInputModal
          title="Edit skill name"
          startValue={name}
          placeholder="Enter a new skill name"
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

export default EditSkill;
