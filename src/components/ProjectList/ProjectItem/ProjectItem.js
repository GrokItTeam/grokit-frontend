import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';


function ProjectItem(props) {

    return (
        <Row key={props.project.projectId}>
            <h1>{props.project.name}</h1>
            {props.skills.map(skill => (
                <p key={skill.skillId}>{skill.name}</p>
            ))}
        </Row>
    );
}

export default ProjectItem;
