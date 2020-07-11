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
    if (skill.length) {
      addSkill(projectId, skill);
      setSkill("");
    }
  };

  return (
    <div className="addSkill row">
      <input type="text" placeholder="Add New Skill..." value={skill} onChange={modifySkill} onKeyPress={handleKeyPress} />
      <button
        className="primaryButton small"
        tabIndex="0"
        onClick={addAndResetSkill}
        onKeyPress={({ key }) => (key === "Enter" ? addAndResetSkill() : null)}
      >
        Add
      </button>
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
  );
}

export default AddSkill;
