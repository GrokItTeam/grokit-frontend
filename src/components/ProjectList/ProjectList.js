import React from "react";

import ProjectItem from "./ProjectItem/ProjectItem";

function ProjectList({
  projects = [],
  skillToDo = false,
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
          skillToDo={project.skillToDo}
        />
      ))}
    </div>
  );
}

export default ProjectList;
