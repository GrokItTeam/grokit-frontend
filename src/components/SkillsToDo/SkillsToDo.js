import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

import SkillToDoItem from './SkillToDoItem/SkillToDoItem';
import Timer from 'components/Timer/Timer';


function SkillsToDo({ projects = [], open = true, updatePractisedSkill = () => { } }) {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <>
      {showTimer
        ? <>
          <Button onClick={() => setShowTimer(false)}>Close Pomodoro Timer</Button>
          <Timer duration={1500}/>
        </>
        : <Button onClick={() => setShowTimer(true)}>Show Pomodoro Timer</Button>}

      <Card style={{ border: "2px solid black" }}>
        <Card.Header className="h4" aria-controls="task-item-contents" aria-expanded={open}>
          <h1>Skills to practise today</h1>
        </Card.Header>
        <Card.Body>
          {projects && projects.map(({ projectId, datePractised, name, skillToDo, skills = [] }) => {
            if (!skills.length) {
              return null;
            }
            const skill = skills.find(({ skillId }) => skillId === skillToDo) || {};

            return (
              <SkillToDoItem
                key={projectId}
                datePractised={datePractised}
                projectName={name}
                skill={skill}
                skillToDo={skillToDo}
                updatePractisedSkill={updatePractisedSkill}
              />
            )
          })}
        </Card.Body>
      </Card>
    </>
  );
}

export default SkillsToDo;
