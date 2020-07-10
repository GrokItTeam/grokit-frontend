import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useAppContext } from "libs/ContextLib.js";

import LineChart from "components/Charts/LineChart";
import NoChartsDisplay from "components/Charts/NoChartsDisplay";


function ChartsPage() {
    const { userId } = useAppContext();
    const [chartData, setChartData] = useState([]);
    const [loadingChartData, setLoadingChartData] = useState(true);

    useEffect(() => {        
      setLoadingChartData(true);
          axios
            .get(`https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/linechart?userId=${userId}`)
            .then((response) => {
              setChartData(response.data.linechartData);
              setLoadingChartData(false);
            })
            .catch((error) => {
              console.log("Error fetching data", error);
            });
      },[userId]);

    if (!loadingChartData) {
      return (
        <Container fluid="lg" >
            {chartData.length === 0 
            ? <NoChartsDisplay/>
            : chartData && chartData.map(({projectName, skills = []}) => (
                <>
                <Row key = {projectName}>
                    <h3>{projectName}</h3>
                    </Row>
                    <Row>
                    {skills.map((skill) => (
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
    else {
      return null;
    }

    
}

export default ChartsPage;
