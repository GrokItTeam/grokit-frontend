import React, {useState, useEffect} from "react";
import useDebounce from "utilities/useDebounce";

function EditSkill({ skillId, name, skillToDo = false, editSkillName = () => {}, deleteSkill = () => {} }) {
  const [skillName, setSkillName] = useState(name); 
  const debouncedSkillName = useDebounce(skillName,500)
  
  const delSkill = () => {
    if (window.confirm(`Are you sure you wish to delete "${name}"? This will delete your progress and ${name}'s chart data.`)) {
      deleteSkill(skillId, skillToDo);
   }
  };

  useEffect(()=> {
    editSkillName(skillId,debouncedSkillName);
  },[debouncedSkillName]);

  return (
    <div className="skillItem">
      <input type="text" defaultValue={name} onChange={({ target: { value = "" } = {} }) => setSkillName(value)} />
      <p tabIndex="0" onClick={delSkill} onKeyPress={({key}) => key === "Enter" ? delSkill() : null}>×</p>
    </div>
  );
}

export default EditSkill;
