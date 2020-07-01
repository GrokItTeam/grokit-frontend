import React from "react";

import ProjectItem from "./ProjectItem/ProjectItem";

function ProjectList({ projects = [], addSkill = () => {}, deleteSkill = () => {} }) {
  return (
    <>
      {projects.map((project) => (
        <ProjectItem
          key={project.projectId}
          project={project}
          addSkill={addSkill}
          deleteSkill={deleteSkill}
        />
      ))}
    </>
  );
}

export default ProjectList;
