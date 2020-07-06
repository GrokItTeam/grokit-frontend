import React from 'react';
import { Row, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import MarkSkillAsPractised from './MarkSkillAsPractised';


function Skill({ history, projectName = "", skill={}, updatePractisedSkill = () => { } }) {

    return (
        <Row>
            <p>{projectName}: {skill.name}</p>
            <Button onClick = {() => history.push("/timer")}>Timer</Button>
            <MarkSkillAsPractised updatePractisedSkill = {updatePractisedSkill} skill={skill}/>
        </Row>
    )
}

export default withRouter(Skill);
