import React, {useEffect, useState, Fragment} from 'react';
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
                <Fragment key = {projectName}>
                <Row className="chart-row-header">
                    <h3>{projectName}</h3>
                    </Row>
                    <Row className="chart-row">
                    {skills.map((skill) => (
                        <Col key={skill.skillId} xs={12} lg={6}>
                        <LineChart chartData = {skill} title = {skill.skillName} height = {300}/>                            
                        </Col>
                    ))}
                </Row>
                </Fragment>
            ))}
        </Container>
    );
    }
    else {
      return null;
    }

    
}

export default ChartsPage;
