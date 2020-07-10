import React from 'react';

import { useAppContext } from "libs/ContextLib.js";

import NewProject from 'components/CreateNewProject/NewProject';
import ProjectList from 'components/ProjectList/ProjectList';

function ProjectsPage({ projects = [], addProject = () => {}, addSkill = () => {}, deleteSkill = () => {}, deleteProject = () => {}, editSkillName = () => {}, editProjectName = () => {} }) {
  const { loadingProjects } = useAppContext();

  if (!loadingProjects)  {
      return (
          <>
      <NewProject addProject={addProject} />
        <ProjectList
          projects={projects}
          addSkill={addSkill}
          deleteSkill={deleteSkill}
          deleteProject={deleteProject}
          editSkillName={editSkillName}
          editProjectName={editProjectName}
        />
        </>
  );}
  else {
    return null;
  }
}

export default ProjectsPage;



