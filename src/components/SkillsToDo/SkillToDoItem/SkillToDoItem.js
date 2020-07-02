import React from 'react';
import moment from 'moment';
import PractisedToday from './PractisedToday';
import Skill from './Skill';
import NoSkill from './NoSkill';


function SkillToDoItem({ datePractised = "", projectName = "", skillName = "", skillToDo, updatedPractisedSkill = () => { } }) {
    if (moment(datePractised).isSame(moment(), "day")) {
        return (<PractisedToday projectName={projectName} />)
    }
    else {
        if (skillToDo) {
            return (<Skill projectName={projectName} skillName={skillName} skillToDo={skillToDo} updatedPractisedSkill={updatedPractisedSkill} />)
        }
        else {
            return (<NoSkill projectName={projectName} />)
        }
    }
};

export default SkillToDoItem;
