import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container} from 'react-bootstrap';

import ProjectList from 'components/ProjectList/ProjectList';
import SkillsToDo from 'components/SkillsToDo/SkillsToDo';

import './App.css';

function App() {
  const [userId, setUserId] = useState("test-id");
  const [projects, setProjects] = useState();
  const [skills, setSkills] = useState();

  useEffect(() => {
    if (userId) {
        axios
            .get(`https://q20eu71jqa.execute-api.eu-west-2.amazonaws.com/dev/projects?userId=${userId}`)
            .then(response => {
                setProjects(response.data.projects);
            })
            .catch(error => {
                console.log("Error fetching data", error);
            })
    }
}, [userId]);    

useEffect(() => {
    if (projects) {
        projects.forEach(project => {
            axios
            .get(`https://q20eu71jqa.execute-api.eu-west-2.amazonaws.com/dev/skills?projectId=${project.projectId}`)
            .then(response => {
                setSkills(response.data.skills);
            })
            .catch(error => {
                console.log("Error fetching data", error);
            })
        })
    }
}, [projects]);

  return (
    <Container className="App">
      <SkillsToDo projects={projects}/>
      <ProjectList skills={skills} projects={projects}/>
    </Container>
  );
}

export default App;
