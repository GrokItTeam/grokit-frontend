import React, { useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import ExampleSkillItem from "components/ProjectList/SkillItem/ExampleSkillItem";

function ExampleProject({ project: { name, skills = [] } = {}, open = true }) {
  const [cardOpen, setCardOpen] = useState(false);

  return (
    <Card className="primaryCard" key={name}>
      <Card.Header className="h4" aria-controls="task-item-contents" aria-expanded={open} onClick={() => setCardOpen(!cardOpen)}>
        <h1>{name}</h1>
        <div className={`arrow ${cardOpen ? "open" : ""}`}></div>
      </Card.Header>
      <Collapse in={cardOpen}>
        <Card.Body>
          {skills.map(({ name }) => (
            <ExampleSkillItem key={name} name={name} />
          ))}
        </Card.Body>
      </Collapse>
    </Card>
  );
}

export default ExampleProject;
