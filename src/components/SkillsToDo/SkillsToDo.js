import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

import SkillToDoItem from "./SkillToDoItem/SkillToDoItem";
import Timer from "components/Timer/Timer";
import Message from "components/Message/Message";
import ProjectSchedule from "components/Schedule/ProjectSchedules";

function SkillsToDo({ projects = [], open = true, updatePractisedSkill = () => {} }) {
  const [showTimer, setShowTimer] = useState(false);
  const [name] = useState();

  return (
    <div className="skillToDo">
      <Message name={name} />
      <Card className="primaryCard">
        <Card.Body className="h5">
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
      <Row className="schedule-header">
        <Col>
          <h5 className="schedule-header__title">Predicted Project Schedule</h5>
        </Col>
      </Row>
      <Row>
        {projects.map(({ projectId, name, datePractised }) => (
          <Col key={projectId} xs={12} md={6} xl={4}>
            <ProjectSchedule projectId={projectId} name={name} datePractised={datePractised} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default SkillsToDo;
