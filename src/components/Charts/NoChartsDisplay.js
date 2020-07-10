import React from "react";
import { Row, Col, Figure } from "react-bootstrap";
import SevenTimesTables from "img/SevenTimesTables.png";
import ThreeTimesTables from "img/ThreeTimesTables.png";

function NoChartsDisplay() {
  return (
    <Row>
      <h4 className="noChartsDisplay__title">
        As you start completing skills, charts will display to show your progress, like in the example below.
      </h4>
      <Row>
        <Col xs={12} lg={6}>
        <Figure>
        <Figure.Image src={SevenTimesTables} width={450} alt="Seven times tables" rounded/>
        </Figure>
        </Col>
        <Col xs={12} lg={6}>
        <Figure>
        <Figure.Image src={ThreeTimesTables} width={450} alt="Three times tables" rounded/>
        </Figure>
        </Col>
      </Row>
    </Row>
  );
}

export default NoChartsDisplay;
