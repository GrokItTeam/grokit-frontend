import React from "react";
import { Row, Button } from "react-bootstrap";

function SkillItem({ skillId, name, deleteSkill = () => { } }) {

    const handleDeleteSkillButton = () => {
        if (window.confirm(`Are you sure you wish to delete "${name}"`)) {
            deleteSkill(skillId);
        }
    }

    return (
        <Row>
            <p key={skillId}>{name}</p>
            <Button onClick={handleDeleteSkillButton}>Delete</Button>
        </Row>
    );
}

export default SkillItem;
