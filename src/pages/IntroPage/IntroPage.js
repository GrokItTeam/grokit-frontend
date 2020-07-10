import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Figure } from "react-bootstrap";
import forgettingCurve from "img/the-forgetting-curve.png";
import combattingForgettingCurve from "img/combating-the-forgetting-curve.png";

function IntroPage() {
  return (
    <Container className="introPage">
      <Row className="introPage__introduction">
        <Col>
          <p>
            Welcome, please click here to <br className="mobile-break"/>
            <Link to="/grokit-frontend/signin">Sign in</Link> or <Link to="/grokit-frontend/signup">Sign Up</Link>{" "}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>
            Why <span className="grokitLogo">GrokIt</span>?
          </h2>
          <h3 className="introPage__quotation">
            <i>
              grok <small>(verb)</small>
            </i>
          </h3>
          <p>to understand completely and intuitively </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6}>
        <Figure>
        <Figure.Image src={forgettingCurve} width={450} alt="The Forgetting Curve" rounded/>
        <Figure.Caption>The Forgetting Curve, image from <a href="https://www.growthengineering.co.uk/wp-content/uploads/2016/11/the-forgetting-curve.png">Growth Engineering</a> </Figure.Caption>
        </Figure>
          
          <p>Information is lost from our memory over time if no effort is made to retain it.</p>
        </Col>
        <Col xs={12} lg={6}>
        <Figure>
        <Figure.Image src={combattingForgettingCurve} width={450} alt="Combating the Forgetting Curve" rounded/>
        <Figure.Caption>Combating the Forgetting Curve, image from <a href="https://www.growthengineering.co.uk/wp-content/uploads/2016/09/combating-the-forgetting-curve.png">Growth Engineering</a> </Figure.Caption>
        </Figure>
          <p>
            The most effective time to practise a skill or rehearse knowledge is just before you forget it. We will remind you what to work
            on each day, until you{" "}
            <strong>
              <span className="grokitLogo">GrokIt</span>
            </strong>
            .
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default IntroPage;
