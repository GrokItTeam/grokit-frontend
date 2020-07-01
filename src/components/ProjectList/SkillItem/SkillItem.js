import React from "react";
import { Row, Button } from "react-bootstrap";
import EditSkill from "components/SkillsToDo/EditSkill/EditSkill";

function SkillItem({ skillId, name, deleteSkill = () => { }, editSkillName = () => {} }) {

    const handleDeleteSkillButton = () => {
        if (window.confirm(`Are you sure you wish to delete "${name}"`)) {
            deleteSkill(skillId);
        }
    }

    

    return (
        <Row>
            <p key={skillId}>{name}</p>
            <Button onClick={handleDeleteSkillButton}>Delete</Button>
            <EditSkill skillId = {skillId} name={name} editSkillName = {editSkillName} />
        </Row>
    );
}

export default SkillItem;
