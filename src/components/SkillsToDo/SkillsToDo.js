import React from 'react';
import { Card } from 'react-bootstrap';

import SkillToDoItem from './SkillToDoItem/SkillToDoItem';


function SkillsToDo({ projects = [], open = true, updatedPractisedSkill = () => { } }) {

  return (
    <Card style={{ border: "2px solid black" }}>
      <Card.Header className="h4" aria-controls="task-item-contents" aria-expanded={open}>
        <h1>Skills to practise today</h1>
      </Card.Header>
      <Card.Body>
        {projects && projects.map(({ projectId, name, skillToDo, skills = [] }) => {
          if (!skills.length) {
            return null;
          }
          const { name: skillName = "" } = skills.find(({ skillId }) => skillId === skillToDo) || {};
          return (
            <SkillToDoItem key={projectId} projectName={name} skillName={skillName} skillToDo={skillToDo} updatedPractisedSkill={updatedPractisedSkill} />
          )
        })}
      </Card.Body>
    </Card>
  );
}

export default SkillsToDo;
