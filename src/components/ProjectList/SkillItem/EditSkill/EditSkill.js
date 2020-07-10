import React from "react";

function EditSkill({ skillId, name, editSkillName = () => {}, deleteSkill = () => {} }) {
  const delSkill = () => {
    if (window.confirm(`Are you sure you wish to delete "${name}"? This will delete your progress and ${name}'s chart data.`)) {
      deleteSkill(skillId);
   }
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
