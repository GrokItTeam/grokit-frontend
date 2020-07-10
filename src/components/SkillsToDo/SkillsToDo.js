import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

import SkillToDoItem from "./SkillToDoItem/SkillToDoItem";
import Timer from "components/Timer/Timer";
import Message from "components/Message/Message";
import ProjectSchedule from "components/Schedule/ProjectSchedules";

function SkillsToDo({ projects = [], open = true, updatePractisedSkill = () => { } }) {
  const [showTimer, setShowTimer] = useState(false);
  const [name] = useState();

  return (
    <>
      <Message name={name} />
      {showTimer ? (
        <>
          <button type="button" className="primaryButton" onClick={() => setShowTimer(false)}>
            Close Pomodoro Timer
          </button>
          <Timer duration={1500} />
        </>
      ) : (
          <button type="button" className="primaryButton" onClick={() => setShowTimer(true)}>
            Show Pomodoro Timer
          </button>
        )}
      <Card style={{ border: "2px solid black" }}>
        <Card.Header className="h4" aria-controls="task-item-contents" aria-expanded={open}>
          <h1>Skills to practise today</h1>
        </Card.Header>
        <Card.Body>
          {projects &&
            projects.map(({ projectId, datePractised, name, skillToDo, skills = [] }) => {
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
              );
            })}
        </Card.Body>
      </Card>
      <Row>
        <Col>
          <p>Below you can see the predicted schedule for each of your projects. 
            <br/>It is likely to change if you add or remove skills, or rate the difficulty of practise as easy or hard.</p>
        </Col>
      </Row>
      <Row>
        {projects.map(({ projectId, name, datePractised }) => (
          <Col xs={12} md={6} xl={3}>
            <ProjectSchedule key={projectId} projectId={projectId} name={name} datePractised={datePractised} />
          </Col>
        ))}
      </Row>

    </>
  );
}

export default SkillsToDo;
