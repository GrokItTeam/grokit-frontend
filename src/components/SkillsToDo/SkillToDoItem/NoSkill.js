import React from 'react';
import { Row } from 'react-bootstrap';


function NoSkill(props) {
    return (
        <Row>{props.project.name}: No task today</Row>
    )
}

export default NoSkill;
