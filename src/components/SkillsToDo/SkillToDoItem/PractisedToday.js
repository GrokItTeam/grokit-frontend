import React from 'react';
import { Row } from 'react-bootstrap';


function PractisedToday(props) {
    return (
        <Row>{props.project.name}: Done for today</Row>
    )
}

export default PractisedToday;
