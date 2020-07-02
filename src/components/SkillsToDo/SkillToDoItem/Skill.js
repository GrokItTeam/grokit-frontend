import React from 'react';
import { Row, Button } from 'react-bootstrap';


function Skill({ projectName = "", skill={}, updatePractisedSkill = () => { } }) {

    function handlePractisedButton() {
        updatePractisedSkill(skill);
    }

    return (
        <Row>
            <p>{projectName}: {skill.name}</p>
            <Button onClick={handlePractisedButton}>Practised</Button>
        </Row>
    )
}

export default Skill;
