import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

import SkillToDoItem from './SkillToDoItem/SkillToDoItem';


function SkillsToDo({ projects = [], open = true, updatedPractisedSkill = () => {} }) {    

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
                    <SkillToDoItem key={project.projectId} project={project} updatedPractisedSkill={updatedPractisedSkill}/>
                ))}
            </Card.Body>
        </Card>
    );
}

export default SkillsToDo;
