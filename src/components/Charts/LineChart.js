import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { Container } from 'react-bootstrap';


function LineChart(props) {

    const data = [{
        "id": "skill 1",
        "data": [
            {
                "x": 0,
                "y": 100
            },
            {
                "x": 1,
                "y": 36.78794412
            },
            {
                "x": 1,
                "y": 100
            },
            {
                "x": 2,
                "y": 60.65306597

            },
            {
                "x": 3,
                "y": 36.78794412
            },
            {
                "x": 3,
                "y": 100
            },
            {
                "x": 4,
                "y": 71.65313106

            }
        ]
    }]

    function CustomTooltip({point: {serieId, data: {x, y}}}) {
        return (
            <div style={{ backgroundColor: "#f1f0ec", padding: 5 }}>
                {serieId} <br/>
                Day: {x} <br />
                {y === 100 ? "Practised" : `Remember: ${y | 0}%`}
            </div>
        )
    }

    const theme = {
        fontSize: 14,
        fontFamily: "Verdana, Arial, sans-serif",
        axis: {
            legend: {
                text: {
                    fontSize: 16,
                }
            }
        }
    };

    return (
        <Container fluid="lg" style={{ height: 600 }}>
            <ResponsiveLine className="graph"
                data={data}
                margin={{ top: 70, right: 20, bottom: 70, left: 150 }}
                xScale={{
                    type: "linear",
                    tickValues: 1
                }}
                yScale={{
                    type: "linear",
                    min: 0
                }}
                axisTop={null}
                axisRight={null}
                axisLeft={{
                    legend: "Remembered",
                    legendPosition: "middle",
                    legendOffset: -50
                }}
                axisBottom={{
                    legend: "Days from first practice",
                    legendPosition: "middle",
                    legendOffset: 40
                }}
                theme={theme}
                curve={"linear"}
                colors={{ scheme: "accent" }}
                lineWidth={5}
                pointSize={20}
                enableGridX={true}
                enableGridY={true}
                tooltip={CustomTooltip}
                useMesh={true}
                enableCrosshair={false}
            />
        </Container>
    );
}

export default LineChart;
