import React from 'react';
import { Row, Button } from 'react-bootstrap';


function Skill({ project = [], markAsPractised = () => {} }) {

    function handlePractisedButton() {
        markAsPractised(project);
    }

    return (
        <Row>
            <p>{project.name}: {project.skills.find(skill => skill.skillId === project.skillToDo).name}</p>
            <Button onClick={handlePractisedButton}>Practised</Button>
        </Row>
    )
}

export default Skill;
