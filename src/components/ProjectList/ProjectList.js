import React from "react";

import ProjectItem from "./ProjectItem/ProjectItem";

function ProjectList({
  projects = [],
  addSkill = () => {},
  deleteSkill = () => {},
  deleteProject = () => {},
  editSkillName = () => {},
  editProjectName = () => {},
}) {
  return (
    <div className="cardContainer">
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
    </div>
  );
}

export default ProjectList;
