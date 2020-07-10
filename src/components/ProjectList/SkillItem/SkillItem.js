import React from "react";
import { Row } from "react-bootstrap";
import EditSkill from "components/ProjectList/SkillItem/EditSkill/EditSkill";

function SkillItem({ skillId, name, deleteSkill = () => {}, editSkillName = () => {} }) {
  return (
    <Row>
      <EditSkill skillId={skillId} name={name} editSkillName={editSkillName} deleteSkill={deleteSkill} />
    </Row>
  );
}

export default SkillItem;
