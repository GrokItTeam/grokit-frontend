import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectSchedule from "components/Schedule/ProjectSchedules";


function SchedulePage({ projects = [] }) {

    return (
        <>
        <Row>
            <Col>
                <p>Below you can see the predicted schedule for each of your projects. It is likely to change if you add or remove skills, or rate the difficulty of practise as easy or hard.</p>
            </Col>
        </Row>
        <Row>
            {projects.map(({ projectId, name, datePractised }) => (
                <Col xs={12} md={6} xl={3}>
                    <ProjectSchedule key={projectId} projectId={projectId} name={name} datePractised={datePractised} />
                </Col>
            ))}
        </Row>
        </>
    )
}

export default SchedulePage;
