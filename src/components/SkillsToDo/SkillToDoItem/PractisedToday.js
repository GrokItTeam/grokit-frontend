import React from 'react';
import { Row } from 'react-bootstrap';


function PractisedToday({ projectName = "" }) {
    return (
        <Row className="center-skillToDo">{projectName}: Done for today</Row>
    )
}

export default PractisedToday;
