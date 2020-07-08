import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useAppContext } from "libs/ContextLib.js";

function Header({ history }) {
  const [expanded, setExpanded] = useState(false);
  const { loggedIn, setLoggedIn } = useAppContext();

  async function handleLogOut() {
    await Auth.signOut();
    setLoggedIn(false);
    history.push("/grokit-frontend/");
  }

  return (
    <Navbar className="NavBar" expand="sm" expanded={expanded}>
      <Navbar.Brand className="grokitLogo">GrokIt</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav onClick={() => setExpanded(false)}>
          <Link className="px-3" to="/grokit-frontend/">
            Home
          </Link>
          {loggedIn ? (
            <Link className="px-3" to="/grokit-frontend/projects">
              Projects
            </Link>
          ) : (
            ""
          )}
        </Nav>
        <Nav className="ml-auto">
          {loggedIn ? (
            <button type="button" className="secondaryButton" onClick={handleLogOut}>
              Sign Out
            </button>
          ) : (
            <>
              <button type="button" className="secondaryButton" onClick={() => history.push("/grokit-frontend/signin")}>
                Sign In
              </button>
              <button type="button" className="primaryButton" onClick={() => history.push("/grokit-frontend/signup")}>
                Sign up
              </button>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);
