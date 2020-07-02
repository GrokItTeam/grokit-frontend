import React from 'react';
import { Row, Button } from 'react-bootstrap';


function Skill({ projectName = "", skillName = "", skillToDo, updatedPractisedSkill = () => { } }) {

    function handlePractisedButton() {
        updatedPractisedSkill(skillToDo);
    }

    return (
        <Row>
            <p>{projectName}: {skillName}</p>
            <Button onClick={handlePractisedButton}>Practised</Button>
        </Row>
    )
}

export default Skill;
