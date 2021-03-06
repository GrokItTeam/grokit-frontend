import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Auth } from "aws-amplify";

import { AppContext } from "./libs/ContextLib.js";

import NavBar from "components/NavBar/NavBar";
import ProjectsPage from "pages/ProjectsPage";
import HomePage from "pages/HomePage";
import IntroPage from "pages/IntroPage/IntroPage";
import ChartsPage from "pages/ChartsPage";
import SignIn from "components/Forms/SignIn/SignIn";
import SignUp from "components/Forms/SignUp/SignUp";
import ResetPassword from "components/Forms/ResetPassword/ResetPassword";

function App() {
  // listen for use of mouse
  document.body.addEventListener('mousedown', function () {
    document.body.classList.add('using-mouse');
  });

  // listen for use of tab
  document.body.addEventListener('keydown', function (event) {
    if (event.keyCode === 9) {
      document.body.classList.remove('using-mouse');
    }
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [name, setName] = useState(); //this is good!
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      setLoggedIn(true);
      const userInfo = await Auth.currentUserInfo();
      setUserId(userInfo.username);
      setName(userInfo.attributes.name); // this is good!
    } catch (e) { }
    setIsAuthenticating(false);
  }

  useEffect(() => {
    if (userId) {
      setLoadingProjects(true);
      axios
        .get(
          `https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/projects?userId=${userId}`
        )
        .then((response) => {
          setProjects(response.data.projects);
          setLoadingProjects(false);
        })
        .catch((error) => {
          console.log("Error fetching data", error);
        });
    }
  }, [userId]);

  const addProject = ({ name = "" }) => {
    const newProject = { name, userId, datePracticed: Date.now() };
    axios
      .post(
        `https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/projects`,
        newProject
      )
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
      .post(
        `https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/skills`,
        newSkill
      )
      .then((response) => {
        const updatedProjects = projects.map((project) => {
          const { skills = [] } = project;
          if (project.projectId === projectId) {
            if (skills.length === 0) {
              return {
                ...project,
                skillToDo: response.data.skill.skillId,
                skills: [response.data.skill],
              };
            }
            return { ...project, skills: [...skills, response.data.skill] };
          }
          return project;
        });
        setProjects(updatedProjects);
      })
      .catch((error) => {
        console.log("Error posting skill", error);
      });
  };

  const updatePractisedSkill = (practisedSkill, difficulty) => {
    const { projectId, skillId } = practisedSkill;

    axios
      .put(
        `https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/skills/markAsPractised/${difficulty}`,
        practisedSkill
      )
      .then((response) => {
        const updatedSkill = response.data.practisedSkill;
        window.alert(`Great job. You'll see this skill again in about ${updatedSkill.lastGap1} day${updatedSkill.lastGap1 === 1 ? "" : "s"}.`);
        const updatedProjects = projects.map((project) => {
          const { skills = [] } = project;
          if (project.projectId === projectId) {
            project.datePractised = moment().format("YYYY-MM-DD");
            project.skillToDo = null;
            skills.map((skill) => {
              if (skill.skillId === skillId) {
                skill = updatedSkill;
              }
              return skill;
            });
          }
          return project;
        });
        setProjects(updatedProjects);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  };

  const deleteSkill = (skillId, skillToDo) => {
    axios
      .delete(
        `https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/skills/${skillId}`
      )
      .then(() => {
        if (skillId === skillToDo) {
          return axios
            .get(
              `https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/projects?userId=${userId}`
            )
            .then((response) => {
              setProjects(response.data.projects);
            })
            .catch((error) => {
              console.log("Error fetching data", error);
            });
        }
        else {
          const updatedProjects = projects.map((project) => {
            const { skills = [] } = project;
            return {
              ...project,
              skills: skills.filter((skill) => skill.skillId !== skillId),
            };
          });
          setProjects(updatedProjects);
        }
      })
      .catch((error) => {
        console.log("Error deleting skill", error);
      });
  };

  const editSkillName = (skillId, skillName) => {
    axios
      .put(
        `https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/skills/${skillId}`,
        { name: skillName }
      )
      .then((response) => {
        const updatedProjects = projects.map((project) => {
          const { skills = [] } = project;
          skills.map((skill) => {
            if (skill.skillId === skillId) {
              skill.name = skillName;
            }
            return skill;
          });
          return project;
        });
        setProjects(updatedProjects);
      })
      .catch((error) => {
        console.log("Error updating skill", error);
      });
  };

  const deleteProject = (projectId) => {
    axios
      .delete(
        `https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/projects/${projectId}`
      )
      .then((response) => {
        const updatedProjects = projects.filter((project) =>
          project.projectId !== projectId ? project : null
        );
        setProjects(updatedProjects);
      })
      .catch((error) => {
        console.log("Error deleting project");
      });
  };

  const editProjectName = (projectId, projectName) => {
    axios
      .put(
        `https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/projects/${projectId}`,
        { name: projectName }
      )
      .then((response) => {
        const updatedProjects = projects.map((project) => {
          if (project.projectId === projectId) {
            project.name = projectName;
          }
          return project;
        });
        setProjects(updatedProjects);
      })
      .catch((error) => {
        console.log("Error updating skill", error);
      });
  };

  return (
    !isAuthenticating && (
      <Router>
        <AppContext.Provider
          value={{
            loggedIn,
            setLoggedIn,
            userId,
            setUserId,
            name,
            setName,
            loadingProjects,
          }}
        >
          <NavBar />
          <Container className="App">
            <Switch>
              {!loggedIn && (
                <>
                  <Route exact path="/grokit-frontend/">
                    <IntroPage />
                  </Route>
                  <Route path="/grokit-frontend/signup">
                    <SignUp />
                  </Route>
                  <Route path="/grokit-frontend/signin">
                    <SignIn />
                  </Route>
                  <Route path="/grokit-frontend/resetpassword">
                    <ResetPassword />
                  </Route>
                </>
              )}
              {loggedIn && (
                <>
                  <Route exact path="/grokit-frontend/">
                    <HomePage
                      projects={projects}
                      updatePractisedSkill={updatePractisedSkill}
                      addProject={addProject}
                    />
                  </Route>
                  <Route path="/grokit-frontend/projects">
                    <ProjectsPage
                      addProject={addProject}
                      projects={projects}
                      addSkill={addSkill}
                      deleteSkill={deleteSkill}
                      deleteProject={deleteProject}
                      editSkillName={editSkillName}
                      editProjectName={editProjectName}
                    />
                  </Route>
                  <Route path="/grokit-frontend/charts">
                    <ChartsPage />
                  </Route>
                </>
              )}
            </Switch>
          </Container>
        </AppContext.Provider>
      </Router>
    )
  );
}

export default App;
