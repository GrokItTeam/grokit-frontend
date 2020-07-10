import React from "react";
import { Row } from "react-bootstrap";
import EditSkill from "components/ProjectList/SkillItem/EditSkill/EditSkill";

function SkillItem({ skillId = "", name = "", skillToDo = false, deleteSkill = () => {}, editSkillName = () => {} }) {
  return (
    <Row>
      <EditSkill skillId={skillId} name={name} editSkillName={editSkillName} deleteSkill={deleteSkill} skillToDo={skillToDo}/>
    </Row>
  );
}

export default SkillItem;
