import React from 'react';
import { Row } from 'react-bootstrap';


function NoSkill({ projectName = "" }) {
    return (
        <Row>{projectName}: No task today</Row>
    )
}

export default NoSkill;
