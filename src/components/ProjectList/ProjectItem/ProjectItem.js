import React, { useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import AddSkill from "components/AddSkill/AddSkill";
import SkillItem from "components/ProjectList/SkillItem/SkillItem";
import EditProject from "components/ProjectList/ProjectItem/EditProject/EditProject";
import SingleInputModal from "components/Modals/SingleInputModal";

function ProjectItem({
  project: { projectId, name, skills = [] } = {},
  open = true,
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
    <Card className="grokitCard" key={projectId}>
      <Card.Header className="h4" aria-controls="task-item-contents" aria-expanded={open} onClick={() => setCardOpen(!cardOpen)}>
        <h1>{name}</h1>
        <button type="button" onClick={handleShow}>
          ✎
        </button>
        <>
          {smShow ? (
            <SingleInputModal
              title="Edit project name"
              placeholder="Enter new project name"
              startValue={name}
              status={smShow}
              handleClose={handleClose}
              onSave={onSave}
            />
          ) : (
            ""
          )}
        </>
        <div className={`arrow ${cardOpen ? "open" : ""}`}></div>
      </Card.Header>
      <Collapse in={cardOpen}>
        <Card.Body>
          <AddSkill projectId={projectId} addSkill={addSkill} />
          {skills.map(({ skillId, name }) => (
            <SkillItem key={skillId} skillId={skillId} name={name} deleteSkill={deleteSkill} editSkillName={editSkillName} />
          ))}
          <button type="button" className="secondaryButton" onClick={handleDeleteProjectButton}>
            Delete Project
          </button>
          <EditProject projectId={projectId} name={name} editProjectName={editProjectName} />
        </Card.Body>
      </Collapse>
    </Card>
  );
}

export default ProjectItem;
