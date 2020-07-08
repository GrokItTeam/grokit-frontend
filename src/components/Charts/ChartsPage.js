import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useAppContext } from "libs/ContextLib.js";

import LineChart from "components/Charts/LineChart";
import NoChartsDisplay from "components/Charts/NoChartsDisplay";


function ChartsPage() {
    const { userId } = useAppContext();
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
          axios
            .get(`https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/linechart?userId=${userId}`)
            .then((response) => {
              setChartData(response.data.linechartData);
            })
            .catch((error) => {
              console.log("Error fetching data", error);
            });
      },[userId]);

    return (
        <Container fluid="lg" >
            {chartData.length === 0 
            ? <NoChartsDisplay/>
            : chartData && chartData.map(project => (
                <>
                <Row key = {project.projectName}>
                    <h3>{project.projectName}</h3>
                    </Row>
                    <Row>
                    {project.skills.map((skill) => (
                        <Col key={skill.skillId}>
                        <LineChart chartData = {skill} title = {skill.skillName} height = {300}/>                            
                        </Col>
                    ))}
                </Row>
                </>
            ))}
        </Container>
    );
}

export default ChartsPage;
