import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";

function IntroPage() {

    return (
        <Container>
            <Row>
                <Col>
                <h1 style={{ fontFamily: "Playfair Display"}}>grok <small>(verb)</small></h1>
                <p>to understand completely and intuitively </p>
                
                </Col>
            </Row>
            <Row>
                <Col>
                <Image src="https://vectr.com/smbryar/a3qRCjhluB.svg?width=320&height=220&select=a3qRCjhluBpage0" rounded/>
                    <p>Information is lost from our memory over time if no effort is made to retain it.</p>
                </Col>
                <Col>
                <Image src="https://vectr.com/smbryar/a1rKHNM3C.svg?width=320&height=220&select=a1rKHNM3Cpage0" rounded/>
                    <p>The most effective time to practise a skill or rehearse knowledge is just before you forget it. GrokIt reminds you what to work on each day, until you <strong>grok it</strong>.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <p>Welcome to GrokIt, please click here to <Link to="/signin">Sign in</Link> or <Link to="/signup">Sign Up</Link> </p>
                </Col>
            </Row>
        </Container>
    );
}

export default IntroPage;
