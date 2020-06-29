import React from "react";

import ProjectItem from "./ProjectItem/ProjectItem";

function ProjectList({ projects = [], skills = [], addSkill = () => {} }) {
  return (
    <>
      {projects.map((project) => (
        <ProjectItem
          key={project.projectId}
          project={project}
          skills={skills.filter((skill) => skill.projectId === project.projectId)}
          addSkill={addSkill}
        />
      ))}
    </>
  );
}

export default ProjectList;
