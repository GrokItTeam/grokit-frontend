import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

import NewProject from "components/CreateNewProject/NewProject";
import ProjectList from "components/ProjectList/ProjectList";
import SkillsToDo from "components/SkillsToDo/SkillsToDo";

import "./App.css";

function App() {
  const [userId, setUserId] = useState("test-id");
  const [projects, setProjects] = useState();

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://q20eu71jqa.execute-api.eu-west-2.amazonaws.com/dev/projects?userId=${userId}`)
        .then((response) => {
          setProjects(response.data.projects);
        })
        .catch((error) => {
          console.log("Error fetching data", error);
        });
    }
  }, [userId]);

  const addProject = ({ name = "" }) => {
    const newProject = { name, userId, datePracticed: Date.now() };
    console.log(newProject);
    // axios
    //   .post("#", newProject)
    //   .then((response) => {
    //     //TODO: Response here
    //   })
    //   .catch((error) => {
    //     console.log("Error posting project", error);
    //   });
  };

  const addSkill = (projectId, skillName) => {
    const newSkill = { name: skillName, projectId: projectId };
    console.log(newSkill);
    // axios
    //   .post("#", addSkill)
    //   .then((response) => {
    //     //TODO: Response here
    //   })
    //   .catch((error) => {
    //     console.log("Error posting skill", error);
    //   });
  };

  const deleteSkill = (skillId) => {
    axios
      .delete(`https://q20eu71jqa.execute-api.eu-west-2.amazonaws.com/dev/skills/${skillId}`)
      .then((response) => {
        const updatedProjects = projects.map(project => {
          const { skills = [] } = project;
          return {...project, skills: skills.filter(skill => skill.skillId !== skillId)};
        });
        setProjects(updatedProjects);
      })
      .catch((error) => {
        console.log("Error deleting skill", error);
      });
  };

  return (
    <Container className="App">
      <NewProject addProject={addProject} />
      <SkillsToDo projects={projects} />
      <ProjectList projects={projects} addSkill={addSkill} deleteSkill={deleteSkill}/>
    </Container>
  );
}

export default App;
