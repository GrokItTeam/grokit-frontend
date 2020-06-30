import React from 'react';
import { Card, Row } from 'react-bootstrap';


function SkillsToDo({ projects = [], open = true }) {
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
                    {projects && projects.map(project => (
                        <Row key={project.projectId}>
                            <p>{project.name}: {project.skills.find(skill => skill.skillId === project.skillToDo).name}</p>
                        </Row>
                    ))}                    
                </Card.Body>
        </Card>
    );
}

export default SkillsToDo;
