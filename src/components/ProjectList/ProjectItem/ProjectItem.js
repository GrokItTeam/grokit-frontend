import React, { useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import AddSkill from "components/AddSkill/AddSkill";
import SkillItem from "components/ProjectList/SkillItem/SkillItem";

function ProjectItem({ 
  project: { projectId, name, skills = [] } = {}, 
  open = true, 
  addSkill = () => {}, 
  deleteSkill = () => {},
  editSkillName = () => {} 
}){

  const [cardOpen, setCardOpen] = useState(false);

  return (
    <Card key={projectId} style={{ border: "2px solid black" }}>
      <Card.Header className="h4" aria-controls="task-item-contents" aria-expanded={open} onClick={() => setCardOpen(!cardOpen)}>
        <h1>{name}</h1>
      </Card.Header>
      <Collapse in={cardOpen}>
        <Card.Body>
          <AddSkill projectId={projectId} addSkill={addSkill} />
          {skills.map(({skillId, name}) => (
            <SkillItem key={skillId} skillId={skillId} name={name} deleteSkill={deleteSkill} editSkillName={editSkillName}/>
          ))}
        </Card.Body>
      </Collapse>
    </Card>
  );
}

export default ProjectItem;
