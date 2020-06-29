import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Button } from 'react-bootstrap';


function SkillToDoItem(props) {

    function handlePractisedButton() {
        markAsPractised(props.skill);
    }

    function markAsPractised(skill) {
        axios
            .put(`https://q20eu71jqa.execute-api.eu-west-2.amazonaws.com/dev/skills/${skill.skillId}/markAsPractised`, skill)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log("Error fetching data", error);
            })
    }

    return (
        <Row>
            <p>{props.skill.projectName}: {props.skill.name}</p>
            <Button onClick={handlePractisedButton}>Practised</Button>
        </Row>
    );
}

export default SkillToDoItem;
