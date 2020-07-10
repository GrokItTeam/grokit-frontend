import React from "react";
import { Row } from "react-bootstrap";
import MarkSkillAsPractised from "./MarkSkillAsPractised";

function Skill({ projectName = "", skill = {}, updatePractisedSkill = () => {} }) {
  return (
    <Row>
      <MarkSkillAsPractised updatePractisedSkill={updatePractisedSkill} skill={skill} />
      <p>
        {projectName}: {skill.name}
      </p>
    </Row>
  );
}

export default Skill;
