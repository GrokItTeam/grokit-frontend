import React from 'react';
import moment from 'moment';
import PractisedToday from './PractisedToday';
import Skill from './Skill';
import NoSkill from './NoSkill';


function SkillToDoItem({ datePractised = "", projectName = "", skillToDo, skill = {}, updatePractisedSkill = () => { } }) {
    if (moment(datePractised).isSame(moment(), "day")) {
        return (<PractisedToday projectName={projectName} />)
    }
    else {
        if (skillToDo) {
            return (<Skill projectName={projectName} skill={skill} updatePractisedSkill={updatePractisedSkill} />)
        }
        else {
            return (<NoSkill projectName={projectName} />)
        }
    }
};

export default SkillToDoItem;
