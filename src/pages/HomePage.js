import React from 'react';

import { useAppContext } from "libs/ContextLib.js";

import NoProjects from 'components/SkillsToDo/NoProjects';
import SkillsToDo from 'components/SkillsToDo/SkillsToDo';

function HomePage({ projects = [], open = true, updatePractisedSkill = () => {}, addProject = () => {} }) {
  const { loadingProjects } = useAppContext();

  if (!loadingProjects)  {return (
  projects.length === 0 ? <NoProjects projects = {projects} addProject={addProject}/> : <SkillsToDo projects={projects} updatePractisedSkill={updatePractisedSkill}/>
  );}
  else {
    return null;
  }
}

export default HomePage;
