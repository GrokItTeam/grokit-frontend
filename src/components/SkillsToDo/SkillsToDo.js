import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

import SkillToDoItem from './SkillToDoItem/SkillToDoItem';


function SkillsToDo({ projects = [], open = true, updatedPractisedSkill = () => {} }) {
    
    function markAsPractised(project) {
        const practisedSkill = project.skills.find(skill => skill.skillId === project.skillToDo); 
        axios
            .put(`https://q20eu71jqa.execute-api.eu-west-2.amazonaws.com/dev/skills/${practisedSkill.skillId}/markAsPractised`, practisedSkill)
            .then(response => {
                console.log(response.data.updatedPractisedSkill);                
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
                aria-expanded={open}
            >
                <h1>Skills to practise today</h1>
            </Card.Header>
            <Card.Body>
                {projects && projects.map(project=> (
                    <SkillToDoItem key={project.projectId} project={project} markAsPractised={markAsPractised}/>
                ))}
            </Card.Body>
        </Card>
    );
}

export default SkillsToDo;
