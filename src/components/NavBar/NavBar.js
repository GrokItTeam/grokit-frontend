import React, { useState, useEffect } from "react";
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

  let focus = React.createRef();

  useEffect(() => {
    focus.focus();
  }, [focus]);

  return (
    <Navbar className="NavBar" expand="sm" variant="dark" expanded={expanded}>
      <Navbar.Brand className="grokitLogo">GrokIt</Navbar.Brand>
      <Navbar.Toggle className="custom-toggle" aria-controls="main-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
      <Navbar.Collapse id="main-navbar-nav">
        <Nav onClick={() => setExpanded(false)}>
          <NavLink
            ref={(el) => {
              focus = el;
            }}
            className="navlink"
            exact
            to="/grokit-frontend/"
          >
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
