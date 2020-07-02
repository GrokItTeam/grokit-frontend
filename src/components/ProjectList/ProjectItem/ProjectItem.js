import React, { useState } from "react";
import { Button, Card, Collapse } from "react-bootstrap";
import AddSkill from "components/AddSkill/AddSkill";
import SkillItem from "components/ProjectList/SkillItem/SkillItem";

function ProjectItem({ 
  project: { projectId, name, skills = [] } = {}, 
  open = true, 
  addSkill = () => {},
  deleteSkill = () => {}, 
  deleteProject = () => {} 
}) {
  
  const [cardOpen, setCardOpen] = useState(false);

  const handleDeleteProjectButton = () => {
    if (window.confirm(`Are you sure you wish to delete "${name}"? This will delete all associated skills.`)) {
      deleteProject(projectId);
    }
  }

  return (
    <Card key={projectId} style={{ border: "2px solid black" }}>
      <Card.Header className="h4" aria-controls="task-item-contents" aria-expanded={open} onClick={() => setCardOpen(!cardOpen)}>
        <h1>{name}</h1>
      </Card.Header>
      <Collapse in={cardOpen}>
        <Card.Body>
          <AddSkill projectId={projectId} addSkill={addSkill} />
          {skills.map(({skillId, name}) => (
            <SkillItem key={skillId} skillId={skillId} name={name} deleteSkill={deleteSkill}/>
          ))}
          <Button onClick={handleDeleteProjectButton}>Delete Project</Button>
        </Card.Body>
      </Collapse>
    </Card>
  );
}

export default ProjectItem;
