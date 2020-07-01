import React from 'react';
import moment from 'moment';
import PractisedToday from './PractisedToday';
import Skill from './Skill';
import NoSkill from './NoSkill';


function SkillToDoItem({ project = [], updatedPractisedSkill = () => { } }) {
    if (moment(project.datePractised).isSame(moment(), "day")) {
        return (<PractisedToday project={project} />)
    }
    else {
        if (project.skillToDo) {
            return (<Skill project={project} updatedPractisedSkill={updatedPractisedSkill} />)
        }
        else {
            return (<NoSkill project={project} />)
        }
    }
};

export default SkillToDoItem;
