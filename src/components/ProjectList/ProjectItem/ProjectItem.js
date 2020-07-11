import React, { useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import AddSkill from "components/AddSkill/AddSkill";
import SkillItem from "components/ProjectList/SkillItem/SkillItem";
import SingleInputModal from "components/Modals/SingleInputModal";

function ProjectItem({
  project: { projectId, name, skills = [] } = {},
  open = true,
  skillToDo = false,
  addSkill = () => {},
  deleteSkill = () => {},
  deleteProject = () => {},
  editSkillName = () => {},
  editProjectName = () => {},
}) {
  const [cardOpen, setCardOpen] = useState(false);
  const [smShow, setSmShow] = useState(false);

  const handleClose = () => setSmShow(false);
  const handleShow = () => setSmShow(true);

  const handleDeleteProjectButton = () => {
    if (window.confirm(`Are you sure you wish to delete "${name}"? This will delete all associated skills.`)) {
      deleteProject(projectId);
    }
  };

  const onSave = (projectName) => {
    editProjectName(projectId, projectName);
    handleClose();
  };

  return (
    <Card className="projectListCard projectItem" key={projectId}>
      <Card.Header className="h4">
        <div className="projectItem__modifier">
          <h2>✎</h2>
          <h1>{name}</h1>
          <button type="button" title="Edit project name" onClick={handleShow}>
            ✎
          </button>
          {smShow ? (
            <SingleInputModal
              title="Rename project"
              placeholder="Enter new project name"
              startValue={name}
              status={smShow}
              handleClose={handleClose}
              onSave={onSave}
            />
          ) : (
            ""
          )}
        </div>
        <div
          tabIndex="0"
          title={`${cardOpen ? "Hide skills" : "View skills"}`}
          onClick={() => setCardOpen(!cardOpen)}
          onKeyPress={({ key }) => (key === "Enter" ? setCardOpen(!cardOpen) : null)}
        >
          <div className={`arrow ${cardOpen ? "open" : ""}`} aria-controls="task-item-contents" aria-expanded={open}></div>
        </div>
      </Card.Header>
      <Collapse in={cardOpen}>
        <Card.Body>
          <AddSkill projectId={projectId} addSkill={addSkill} />
          {skills.map(({ skillId, name }) => (
            <SkillItem
              key={skillId}
              skillId={skillId}
              name={name}
              deleteSkill={deleteSkill}
              editSkillName={editSkillName}
              skillToDo={skillToDo}
            />
          ))}
          <button type="button" className="secondaryButton" onClick={handleDeleteProjectButton}>
            Delete Project
          </button>
        </Card.Body>
      </Collapse>
    </Card>
  );
}

export default ProjectItem;
