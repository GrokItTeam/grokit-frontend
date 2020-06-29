import React from 'react';

import ProjectItem from './ProjectItem/ProjectItem';


function ProjectList(props) {  
    return (
        <>
            {props.skills && props.projects.map(project => (
                <ProjectItem key={project.projectId} project={project} skills={props.skills.filter(skill => skill.projectId === project.projectId)}/>
            ))}
        </>
    );
}

export default ProjectList;
