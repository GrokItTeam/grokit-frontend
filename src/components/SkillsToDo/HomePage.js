import React from 'react';

import NoProjects from 'components/SkillsToDo/NoProjects';
import SkillsToDo from './SkillsToDo';

function HomePage({ projects = [], open = true, updatePractisedSkill = () => {}, addProject = () => {} }) {

  return (
  projects.length === 0 ? <NoProjects projects = {projects} addProject={addProject}/> : <SkillsToDo projects={projects} updatePractisedSkill={updatePractisedSkill}/>
  );
}

export default HomePage;
