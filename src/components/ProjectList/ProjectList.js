import React from "react";

import ProjectItem from "./ProjectItem/ProjectItem";

function ProjectList({ projects = [], addSkill = () => {}, deleteProject = () => {} }) {
  return (
    <>
      {projects.map((project) => (
        <ProjectItem
          key={project.projectId}
          project={project}
          addSkill={addSkill}
          deleteProject={deleteProject}
        />
      ))}
    </>
  );
}

export default ProjectList;
