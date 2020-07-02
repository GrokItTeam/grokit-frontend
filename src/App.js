import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
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
    axios
      .post(`https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/skills`, newSkill)
      .then((response) => {
        const updatedProjects = projects.map((project) => {
          const { skills = [] } = project;
          if (project.projectId === projectId) {
            if (!project.skills) {
              return { ...project, skillToDo: response.data.skill.skillId, skills: [response.data.skill, ...skills] };
            }
            return { ...project, skills: [response.data.skill, ...skills] };
          }
          return project;
        });
        setProjects(updatedProjects);
      })
      .catch((error) => {
        console.log("Error posting skill", error);
      });
  };

  const updatePractisedSkill = (practisedSkill) => {
    const {projectId, skillId} = practisedSkill;

    axios
      .put(`https://q20eu71jqa.execute-api.eu-west-2.amazonaws.com/dev/skills/${skillId}/markAsPractised`, practisedSkill)
      .then(response => {
        const updatedSkill = response.data.practisedSkill[0];
        
        const updatedProjects = projects.map(project => {
          const {skills = []} = project;
          if (project.projectId === projectId) {
            project.datePractised = moment().format("YYYY-MM-DD");
            project.skillToDo = null;
            skills.map(skill => {
              if (skill.skillId === skillId) {
                skill = updatedSkill;
              }
              return skill;
            })
          }          
          return project;
        })
        setProjects(updatedProjects);
      })
      .catch(error => {
        console.log("Error fetching data", error);
      })
  }
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

  const deleteProject = (projectId) => {
    axios
      .delete(`https://q20eu71jqa.execute-api.eu-west-2.amazonaws.com/dev/projects/${projectId}`)
      .then (response => {
        const updatedProjects = projects.filter(project => project.projectId !== projectId ? project:null);
        setProjects(updatedProjects);
      })
      .catch(error => {
        console.log("Error deleting project");
      })
  }


  return (
    <Container className="App">
      <NewProject addProject={addProject} />
      <SkillsToDo projects={projects} updatePractisedSkill={updatePractisedSkill} />
      <ProjectList projects={projects} addSkill={addSkill} deleteSkill={deleteSkill} deleteProject={deleteProject}/>
    </Container>
  );
}

export default App;
