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
  const [skills, setSkills] = useState();

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

  useEffect(() => {
    if (projects) {
      projects.forEach((project) => {
        axios
          .get(`https://q20eu71jqa.execute-api.eu-west-2.amazonaws.com/dev/skills?projectId=${project.projectId}`)
          .then((response) => {
            setSkills(response.data.skills);
          })
          .catch((error) => {
            console.log("Error fetching data", error);
          });
      });
    }
  }, [projects]);

  const addProject = ({ name = "" }) => {
    const newProject = { name, userId, datePracticed: Date.now() };
    console.log(newProject);
    axios
      .post(`https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/projects`, newProject)
      .then(({ data: { projects: resProject = [] } = {} }) => {
        setProjects([...projects, ...resProject]);
      })
      .catch((error) => {
        console.log("Error posting project", error);
      });
  };

  const addSkill = (projectId, skillName) => {
    const newSkill = { name: skillName, projectId: projectId };
    console.log(newSkill);
    axios
      .post(`https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/skills`, newSkill)
      .then(({ data: { skills: resSkills = [] } = {} }) => {
        setSkills([...skills, ...resSkills]);
      })
      .catch((error) => {
        console.log("Error posting skill", error);
      });
  };

  return (
    <Container className="App">
      <NewProject addProject={addProject} />
      <SkillsToDo projects={projects} />
      <ProjectList skills={skills} projects={projects} addSkill={addSkill} />
    </Container>
  );
}

export default App;
