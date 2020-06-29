import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Button } from 'react-bootstrap';

import SkillToDoItem from './SkillToDoItem/SkillToDoItem';


function SkillsToDo(props) {
    const [skillsToPractise, setSkillsToPractise] = useState([]);

    useEffect(() => {
        if (props.projects) {
            props.projects.forEach(project => {
                axios
                .get(`https://q20eu71jqa.execute-api.eu-west-2.amazonaws.com/dev/projects/${project.projectId}/skillToDo`)
                .then(response => {
                    let skillToPractice = response.data.skillToDo;
                    skillToPractice.projectName = project.name;
                    let updatedSkillsToPractise = [...skillsToPractise,skillToPractice];
                    setSkillsToPractise(updatedSkillsToPractise);
                })
                .catch(error => {
                    console.log("Error fetching data", error);
                })
            })
            
        }
    }, [props.projects]); 

    return (
        <Card style={{ border: "2px solid black" }}>
            <Card.Header
                className="h4"
                aria-controls="task-item-contents"
                aria-expanded={props.open}
            >
                <h1>Skills to practise today</h1>
            </Card.Header>
                <Card.Body>
                    {skillsToPractise && skillsToPractise.map(skill => (
                        <SkillToDoItem key={skill.projectName} skill={skill}/>
                    ))}                    
                </Card.Body>
        </Card>
    );
}

export default SkillsToDo;
