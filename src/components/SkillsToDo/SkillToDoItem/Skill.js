import React from 'react';
import { Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import MarkSkillAsPractised from './MarkSkillAsPractised';


function Skill({ history, projectName = "", skill={}, updatePractisedSkill = () => { } }) {

    return (
        <Row>
            <p>{projectName}: {skill.name}</p>
            <MarkSkillAsPractised updatePractisedSkill = {updatePractisedSkill} skill={skill}/>
        </Row>
    )
}

export default withRouter(Skill);
