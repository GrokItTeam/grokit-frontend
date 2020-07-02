import React from "react";

import ProjectItem from "./ProjectItem/ProjectItem";

function ProjectList({ projects = [], addSkill = () => {}, deleteProject = () => {}, deleteSkill = () => {} }) {
  return (
    <>
      {projects.map((project) => (
        <ProjectItem
          key={project.projectId}
          project={project}
          addSkill={addSkill}
          deleteProject={deleteProject}
          deleteSkill={deleteSkill}
        />
      ))}
    </>
  );
}

export default ProjectList;
