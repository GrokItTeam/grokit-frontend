import React from 'react';
import { Row } from 'react-bootstrap';


function PractisedToday({ project = [] }) {
    return (
        <Row>{project.name}: Done for today</Row>
    )
}

export default PractisedToday;
