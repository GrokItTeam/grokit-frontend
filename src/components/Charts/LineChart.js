import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { Container } from 'react-bootstrap';

import generateLineChatData from './generateLineChartData';


function LineChart(props) {

    const backendData = [{
        skillId: 1,
        name: "Skill 1",
        dateFirstPractised: "2020-06-01",
        practisedData: [{day:0,lastGap0:1,lastGap1:1},{day:1,lastGap0:1,lastGap1:2},{day:3,lastGap0:2,lastGap1:3},{day:6,lastGap0:3,lastGap1:5},{day:11,lastGap0:5,lastGap1:8}]
    },
    {
        skillId: 2,
        name: "Skill 2",
        dateFirstPractised: "2020-06-03",
        practisedData: [{day:0,lastGap0:1,lastGap1:1},{day:1,lastGap0:1,lastGap1:2},{day:3,lastGap0:2,lastGap1:3},{day:6,lastGap0:3,lastGap1:5}]
    }];

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

    const data = generateLineChatData(backendData);

    return (
        <Container fluid="lg" style={{ height: 600 }}>
            <ResponsiveLine className="graph"
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
                pointSize={10}
                enableGridX={true}
                enableGridY={true}
                tooltip={CustomTooltip}
                useMesh={true}
                enableCrosshair={false}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </Container>
    );
}

export default LineChart;
