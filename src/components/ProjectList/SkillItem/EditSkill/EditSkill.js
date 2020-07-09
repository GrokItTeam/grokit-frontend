import React from "react";

function EditSkill({ skillId, name, editSkillName = () => {}, deleteSkill = () => {} }) {
  const delSkill = () => {
    deleteSkill(skillId);
  };

  const modifySkill = ({ target: { value = "" } = {} }) => {
    editSkillName(skillId, value);
  };

  return (
    <div className="skillItem">
      <p>
        <input type="text" defaultValue={name} onChange={modifySkill} />
        <span onClick={delSkill}>×</span>
      </p>
    </div>
  );
}

export default EditSkill;
