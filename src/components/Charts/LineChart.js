import React from 'react';
import { ResponsiveLine } from '@nivo/line';

import generateLineChatData from './generateLineChartData';

import './LineChart.scss';

function LineChart({title = "", height = 200}) {

    const backendData = [{
        skillId: 1,
        projectId: 1,
        name: "Skill 1",
        dateFirstPractised: "2020-06-01",
        practisedData: [{day:0,lastGap0:1,lastGap1:1},{day:1,lastGap0:1,lastGap1:2},{day:3,lastGap0:2,lastGap1:3},{day:6,lastGap0:3,lastGap1:5},{day:11,lastGap0:5,lastGap1:8}]
    },
    // {
    //     skillId: 2,
    //     name: "Skill 2",
    //     dateFirstPractised: "2020-06-03",
    //     practisedData: [{day:0,lastGap0:1,lastGap1:1},{day:1,lastGap0:1,lastGap1:2},{day:3,lastGap0:2,lastGap1:3},{day:6,lastGap0:3,lastGap1:5}]
    // }
];

    function CustomTooltip({point: {serieId, data: {x, y}}}) {
        return (
            <div style={{ backgroundColor: "#f1f0ec", padding: 5 }}>
                Skill: {serieId} <br/>
                Day: {x} <br />
                {y === 100 ? "Practised" : `Remembered: ${y | 0}%`}
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
        <div className = "linechart" style = {{height}}>
        <h3> {title}</h3>
            <ResponsiveLine className="graph"
                data={data}
                margin={{ top: 10, right: 0, bottom: 50, left: 60 }}
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
                pointSize={0}
                enableArea={false}
                enableGridX={true}
                enableGridY={true}
                tooltip={CustomTooltip}
                useMesh={true}
                enableCrosshair={false}                
            />
            </div>
    );
}

export default LineChart;
