import "./NavBar.css"
import { Navbar, Nav, Container } from "react-bootstrap"
import { Github, Linkedin } from "react-bootstrap-icons";
import { useState } from "react";

export default function NavBar() {

    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Navbar bg="#D8D7D8" expand="lg" id="nav-top" expanded={isExpanded}>
            <Container>
                <Navbar.Brand onClick={() => setIsExpanded(false)} href="#home" className="nav-heading">Derek Slauson</Navbar.Brand>
                <Navbar.Toggle onClick={() => setIsExpanded(isExpanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => setIsExpanded(false)} href="#home" active={false} className="nav-top-link">HOME</Nav.Link>
                        <Nav.Link onClick={() => setIsExpanded(false)} href="#education" active={false} className="nav-top-link">EDUCATION</Nav.Link>
                        <Nav.Link onClick={() => setIsExpanded(false)} href="#projects" active={false} className="nav-top-link">PROJECTS</Nav.Link>
                        <Nav.Link onClick={() => setIsExpanded(false)} href="#skills" active={false} className="nav-top-link">SKILLS</Nav.Link>
                        <Nav.Link onClick={() => setIsExpanded(false)} href="#contactMe" active={false} className="nav-top-link">CONTACT ME</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="https://github.com/MarsVolta4366" target="_blank">
                            <Github size={24} color="black" />
                        </a>
                        {" "}
                        <a href="https://www.linkedin.com/in/derekslauson" target="_blank">
                            <Linkedin size={24} color="black" />
                        </a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}