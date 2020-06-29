import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';


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



    return (
        <Container className="ProjectList">
            {projects && projects.map(project => (
                <Row key={project.projectId}>
                    <p>{project.name}</p>
                </Row>
            ))}

        </Container>
    );
}

export default ProjectList;
