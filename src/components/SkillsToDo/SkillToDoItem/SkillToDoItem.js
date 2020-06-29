import React from 'react';
import moment from 'moment';
import PractisedToday from './PractisedToday';
import Skill from './Skill';
import NoSkill from './NoSkill';


function SkillToDoItem(props) {
    if (props.skill) {
        if (moment(props.project.datePractised).isSame(moment(),"day")) {
            return (<PractisedToday {...props}/>)
        }
        else {
            return (<Skill {...props}/>)    
        }
    }
    else {
        return (<NoSkill {...props}/>)
    }
}

export default SkillToDoItem;
