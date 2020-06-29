import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Card } from 'react-bootstrap';

import SkillToDoItem from './SkillToDoItem/SkillToDoItem';


function SkillsToDo(props) {
    const [ongoingProjects, setOngoingProjects] = useState([]);

    useEffect(() => {
        if (props.projects) {
            props.projects.forEach(project => {
                axios
                    .get(`https://q20eu71jqa.execute-api.eu-west-2.amazonaws.com/dev/projects/${project.projectId}/skillToDo`)
                    .then(response => {
                        let projectItem = {
                            project,
                            skill: response.data.skillToDo
                        }
                        let updatedOngoingProjects = [...ongoingProjects, projectItem];
                        setOngoingProjects(updatedOngoingProjects);
                    })
                    .catch(error => {
                        console.log("Error fetching data", error);
                    })
            }
            )
        }
    }, [props.projects]);

    function markAsPractised(skill,project) {
        axios
            .put(`https://q20eu71jqa.execute-api.eu-west-2.amazonaws.com/dev/skills/${skill.skillId}/markAsPractised`, skill)
            .then(response => {
                let updatedOngoingProjects = ongoingProjects.filter(ongoingProject => ongoingProject.project.projectId !== project.projectId);
                let newProject = {project, skill};
                newProject.project.datePractised = moment().format("YYYY-MM-DD");
                setOngoingProjects([...updatedOngoingProjects,newProject]);
            })
            .catch(error => {
                console.log("Error fetching data", error);
            })
    }

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
                {ongoingProjects && ongoingProjects.map(projectItem => (
                    <SkillToDoItem key={projectItem.project.projectId} {...projectItem} markAsPractised={markAsPractised}/>
                ))}
            </Card.Body>
        </Card>
    );
}

export default SkillsToDo;
