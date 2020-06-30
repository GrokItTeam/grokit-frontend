import React from "react";

import ProjectItem from "./ProjectItem/ProjectItem";

function ProjectList({ projects = [], addSkill = () => {} }) {
  return (
    <>
      {projects.map((project) => (
        <ProjectItem
          key={project.projectId}
          project={project}
          addSkill={addSkill}
        />
      ))}
    </>
  );
}

export default ProjectList;
