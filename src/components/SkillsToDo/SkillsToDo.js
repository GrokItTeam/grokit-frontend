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
                    {projects && projects.map(({projectId, name, skillToDo, skills = []}) => (
                        <Row key={projectId}>
                            <p>{name}: {skills.find(({skillId}) => skillId === skillToDo).name}</p>
                        </Row>
                    ))}                    
                </Card.Body>
        </Card>
    );
}

export default SkillsToDo;
