import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { Container, Row, Col } from 'react-bootstrap';

import LineChart from "components/Charts/LineChart";


function ChartsPage() {

    return (
        <Container fluid="lg" >
            <Row>
                <Col xs={12} lg={6} xl={4}>
                    <LineChart title="Skill 1" height = {250}/>
                </Col>
                <Col xs={12} lg={6} xl={4}>
                    <LineChart title="Skill 1" height = {250}/>
                </Col>
                <Col xs={12} lg={6} xl={4}>  
                    <LineChart title="Skill 1" height = {250}/>
                </Col>
            </Row>
        </Container>
    );
}

export default ChartsPage;
