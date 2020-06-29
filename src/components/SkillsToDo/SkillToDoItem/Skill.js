import React from 'react';
import { Row, Button } from 'react-bootstrap';


function Skill(props) {

    function handlePractisedButton() {
        props.markAsPractised(props.skill, props.project);
    }

    return (
        <Row>
            <p>{props.project.name}: {props.skill.name}</p>
            <Button onClick={handlePractisedButton}>Practised</Button>
        </Row>
    )
}

export default Skill;
