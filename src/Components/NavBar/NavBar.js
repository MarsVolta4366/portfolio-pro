import "./NavBar.css"
import { Navbar, Nav, Container } from "react-bootstrap"
import { Github, Linkedin } from "react-bootstrap-icons";

export default function NavBar() {
    return (
        <Navbar bg="#D8D7D8" expand="lg" id="nav-top">
            <Container>
                <Navbar.Brand href="#home" className="nav-heading">Derek Slauson</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="nav-top-link">HOME</Nav.Link>
                        <Nav.Link href="#education" className="nav-top-link">EDUCATION</Nav.Link>
                        <Nav.Link href="#projects" className="nav-top-link">PROJECTS</Nav.Link>
                        <Nav.Link href="#link" className="nav-top-link">SKILLS</Nav.Link>
                        <Nav.Link href="#link" className="nav-top-link">CONTACT ME</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="https://github.com/MarsVolta4366" target="_blank">
                            <Github size={24} />
                        </a>
                        {" "}
                        <a href="https://www.linkedin.com/in/derekslauson" target="_blank">
                            <Linkedin size={24} />
                        </a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}