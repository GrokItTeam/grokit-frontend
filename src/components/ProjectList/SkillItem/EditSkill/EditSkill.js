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
      <input type="text" defaultValue={name} onChange={modifySkill} />
      <p onClick={delSkill}>×</p>
    </div>
  );
}

export default EditSkill;
