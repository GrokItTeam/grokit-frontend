import React from "react";
import { Row } from "react-bootstrap";

function ExampleSkillItem({ name }) {    

    return (
        <Row>
            <p key={name}>{name}</p>
        </Row>
    );
}

export default ExampleSkillItem;
