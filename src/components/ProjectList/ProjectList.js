import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

import ProjectItem from './ProjectItem/ProjectItem';


function ProjectList() {
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
        <Container className="ProjectList">
            {skills && projects.map(project => (
                <ProjectItem key={project.projectId} project={project} skills={skills.filter(skill => skill.projectId === project.projectId)}/>
            ))}

        </Container>
    );
}

export default ProjectList;
