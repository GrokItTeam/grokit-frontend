import React from "react";
import { Card, Row } from "react-bootstrap";

function SkillsToDo({ projects = [], open = true }) {
  return (
    <Card style={{ border: "2px solid black" }}>
      <Card.Header className="h4" aria-controls="task-item-contents" aria-expanded={open}>
        <h1>Skills to practise today</h1>
      </Card.Header>
      <Card.Body>
        {projects &&
          projects.map(({ projectId, name, skillToDo, skills = [] }) => {
            if (!skills.length) {
              return null;
            }
            const { name: skillName = "" } = skills.find(({ skillId }) => skillId === skillToDo) || {};
            return (
              <Row key={projectId}>
                <p>
                  {name}: {skillName}
                </p>
              </Row>
            );
          })}
      </Card.Body>
    </Card>
  );
}

export default SkillsToDo;
