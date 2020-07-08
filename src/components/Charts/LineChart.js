import React from 'react';
import { ResponsiveLine } from '@nivo/line';

import generateLineChartData from './generateLineChartData';

import './LineChart.scss';

function LineChart({title = "", height = 250, chartData = []}) {

    function CustomTooltip({point: {serieId, data: {x, y}}}) {
        return (
            <div style={{ backgroundColor: "#193654", padding: 5, color: "#f1f0ec", borderRadius: 10 }}>
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

    const data = generateLineChartData(chartData);

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
                lineWidth={3}
                pointSize={5}
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
