import React, { useState } from "react";

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
    addSkill(projectId, skill);
    setSkill("");
  };

  return (
    <div className="addSkill">
      <input type="text" placeholder="Add New Skill..." value={skill} onChange={modifySkill} onKeyPress={handleKeyPress} />
      <span onClick={addAndResetSkill}>+</span>
    </div>
  );
}

export default AddSkill;
