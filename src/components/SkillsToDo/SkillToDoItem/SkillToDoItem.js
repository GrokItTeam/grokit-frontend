import React from 'react';
import moment from 'moment';
import PractisedToday from './PractisedToday';
import Skill from './Skill';
import NoSkill from './NoSkill';


function SkillToDoItem({ project = [], markAsPractised = () => {} }) {
    if (project.skillToDo) {
        if (moment(project.datePractised).isSame(moment(),"day")) {
            return (<PractisedToday project={project}/>)
        }
        else {
            return (<Skill project={project}/>)    
        }
    }
    else {
        return (<NoSkill project={project}/>)
    }
}

export default SkillToDoItem;
