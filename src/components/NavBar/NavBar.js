import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
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
    <Navbar className="NavBar" fixed="top" expand="sm" expanded={expanded}>
      <Navbar.Brand className="grokitLogo">GrokIt</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav onClick={() => setExpanded(false)}>
          <NavLink className="navlink" exact to="/grokit-frontend/">
            Home
          </NavLink>
          {loggedIn ? (
            <>
              <NavLink className="navlink" to="/grokit-frontend/projects">
                Projects
              </NavLink>
              <NavLink className="navlink" to="/grokit-frontend/charts">
                Charts
              </NavLink>
            </>
          ) : (
            ""
          )}
        </Nav>
        <Nav className="ml-auto">
          {loggedIn ? (
            <button
              type="button"
              className="secondaryButton"
              onClick={handleLogOut}
            >
              Sign Out
            </button>
          ) : (
            <>
              <button
                type="button"
                className="secondaryButton navSecondaryButton"
                onClick={() => history.push("/grokit-frontend/signin")}
              >
                Sign In
              </button>
              <button
                type="button"
                className="primaryButton navPrimaryButton"
                onClick={() => history.push("/grokit-frontend/signup")}
              >
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
