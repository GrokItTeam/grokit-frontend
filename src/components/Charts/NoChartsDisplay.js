import React from 'react';
import { Row, Image } from 'react-bootstrap';
import ExampleGraphs from 'img/ExampleGraphs.png';


function NoChartsDisplay() {
    return (
        <Row>
            <h4>As you start completing skills, charts will display to show your progress, like in the example below.</h4>
            <Image src={ExampleGraphs}/>
        </Row>
    );
}

export default NoChartsDisplay;
