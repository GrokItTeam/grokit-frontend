import React, { useState } from 'react';
import { Card, Collapse } from 'react-bootstrap';


function ProjectItem(props) {
    const [cardOpen, setCardOpen] = useState(false);

    return (
        <Card key={props.project.projectId} style={{ border: "2px solid black" }}>
            <Card.Header
                className="h4"
                aria-controls="task-item-contents"
                aria-expanded={props.open}
                onClick={() => setCardOpen(!cardOpen)}
            >
                <h1>{props.project.name}</h1>
            </Card.Header>
            <Collapse in={cardOpen}>
                <Card.Body>
                    {props.skills.map(skill => (
                        <p key={skill.skillId}>{skill.name}</p>
                    ))}
                </Card.Body>
            </Collapse>
        </Card>
    );
}

export default ProjectItem;
