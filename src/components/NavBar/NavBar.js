import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { useAppContext } from "libs/ContextLib.js";

function Header({history}) {
    const [expanded, setExpanded] = useState(false);
    const { loggedIn, setLoggedIn } = useAppContext();

    async function handleLogOut() {
        await Auth.signOut();
        setLoggedIn(false);
        history.push("/signin");
    }

    return (
        <Navbar bg="dark" variant="dark" expand="sm" fixed="top" expanded={expanded}>
            <Navbar.Brand>GrokIt</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav onClick={() => setExpanded(false)}>
                    <Link className="px-3" to="/" >Home</Link>
                    <Link className="px-3" to="/projects" >Projects</Link>
                </Nav>
                <Nav className="ml-auto">                    
                {loggedIn ? 
                    <Button variant="primary" onClick={handleLogOut}>Log Out</Button> :
                    <>
                    <Button variant="success" onClick={() => history.push("/signin")}>Log In</Button>
                    <Button variant="primary" onClick={() => history.push("/signup")}>Sign up</Button>
                    </>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(Header);