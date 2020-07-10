import React from "react";
import {Row } from "react-bootstrap";

import ProjectItem from "./ProjectItem/ProjectItem";

function ProjectList({
  projects = [],
  addSkill = () => { },
  deleteSkill = () => { },
  deleteProject = () => { },
  editSkillName = () => { },
  editProjectName = () => { },
}) {
  return (
      <Row className="cardContainer">
        {projects.map((project) => (
          <ProjectItem
            key={project.projectId}
            project={project}
            addSkill={addSkill}
            deleteProject={deleteProject}
            deleteSkill={deleteSkill}
            editSkillName={editSkillName}
            editProjectName={editProjectName}
          />
        ))}
      </Row>
  );
}

export default ProjectList;
