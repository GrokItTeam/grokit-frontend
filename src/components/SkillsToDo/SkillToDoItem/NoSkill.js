import React from 'react';
import { Row } from 'react-bootstrap';


function NoSkill({ project = [] }) {
    return (
        <Row>{project.name}: No task today</Row>
    )
}

export default NoSkill;
