import React from "react";
import { Row } from "react-bootstrap";
import MarkSkillAsPractised from "./MarkSkillAsPractised";

function Skill({ projectName = "", skill = {}, updatePractisedSkill = () => {} }) {
  return (
    <Row className="center-skillToDo">
      <p>
        {projectName}: {skill.name}
      </p>
      <MarkSkillAsPractised updatePractisedSkill={updatePractisedSkill} skill={skill} />
    </Row>
  );
}

export default Skill;
