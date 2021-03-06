import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  timesTablesProject,
  javascriptProject,
  footballProject,
} from "components/ProjectList/ExampleProjects/exampleProjectData";
import ExampleProject from "components/ProjectList/ExampleProjects/ExampleProject";

function NoProjects({
  projects = [],
  open = true,
  updatePractisedSkill = () => {},
  addProject = () => {},
}) {
  return (
    <>
      <div className="NoProjects__description">
        Welcome to <span className="grokitLogo">GrokIt</span>. Let's get started
        by adding some projects that you want to Grok. <br />
        Look at the the example projects below and then click{" "}
        <Link to="/grokit-frontend/projects">here</Link> to start adding your
        own.
      </div>
      <Row>
        <Col>
          <ExampleProject
            addProject={addProject}
            projects={projects}
            project={timesTablesProject}
          />
        </Col>
        <Col>
          <ExampleProject
            addProject={addProject}
            projects={projects}
            project={javascriptProject}
          />
        </Col>
        <Col>
          <ExampleProject
            addProject={addProject}
            projects={projects}
            project={footballProject}
          />
        </Col>
      </Row>
    </>
  );
}

export default NoProjects;
