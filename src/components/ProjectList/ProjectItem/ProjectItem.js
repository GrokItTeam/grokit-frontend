import React, { useState } from "react";
import { Button, Card, Collapse } from "react-bootstrap";
import AddSkill from "components/AddSkill/AddSkill";

function ProjectItem({ 
  project: { projectId, name, skills = [] } = {}, 
  open = true, 
  addSkill = () => {}, 
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
          {skills.map((skill) => (
            <p key={skill.skillId}>{skill.name}</p>
          ))}
          <Button onClick={handleDeleteProjectButton}>Delete Project</Button>
        </Card.Body>
      </Collapse>
    </Card>
  );
}

export default ProjectItem;
