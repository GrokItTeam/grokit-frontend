import React from "react";

import ProjectItem from "./ProjectItem/ProjectItem";

function ProjectList({ 
  projects = [], 
  addSkill = () => {}, 
  deleteSkill = () => {},
  deleteProject = () => {},
  editSkillName = () => {} 
}) {
  return (
    <>
      {projects.map((project) => (
        <ProjectItem
          key={project.projectId}
          project={project}
          addSkill={addSkill}
          deleteProject={deleteProject}
          deleteSkill={deleteSkill}
          editSkillName={editSkillName}
        />
      ))}
    </>
  );
}

export default ProjectList;
