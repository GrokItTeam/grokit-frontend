import React, { useState } from "react";
import {Row} from "react-bootstrap";

function AddSkill({ projectId, addSkill = () => {} }) {
  const [skill, setSkill] = useState("");

  const handleKeyPress = ({ key }) => {
    if (key === "Enter" && skill.length) {
      addAndResetSkill();
    }
  };

  const modifySkill = ({ target: { value = "" } = {} }) => {
    setSkill(value);
  };

  const addAndResetSkill = () => {
    if (skill.length) {
      addSkill(projectId, skill);
      setSkill("");
    }
  };

  return (
    <Row>
    <div className="addSkill">
      <input type="text" placeholder="Add New Skill..." value={skill} onChange={modifySkill} onKeyPress={handleKeyPress} />
      <p
        className="plusAdd"
        tabIndex="0"
        title="Add skill"
        onClick={addAndResetSkill}
        onKeyPress={({ key }) => (key === "Enter" ? addAndResetSkill() : null)}
      >
        +
      </p>
    </div>
    </Row>
  );
}

export default AddSkill;
