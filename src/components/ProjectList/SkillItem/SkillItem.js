import React from "react";
import { Row } from "react-bootstrap";
import EditSkill from "components/ProjectList/SkillItem/EditSkill/EditSkill";

function SkillItem({ skillId, name, deleteSkill = () => {}, editSkillName = () => {} }) {
  const handleDeleteSkillButton = () => {
    if (window.confirm(`Are you sure you wish to delete "${name}"`)) {
      deleteSkill(skillId);
    }
  };

  return (
    <Row>
      <p key={skillId}>{name}</p>
      <button type="button" className="secondaryButton" onClick={handleDeleteSkillButton}>
        Delete
      </button>
      <EditSkill skillId={skillId} name={name} editSkillName={editSkillName} />
    </Row>
  );
}

export default SkillItem;
