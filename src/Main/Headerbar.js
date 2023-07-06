import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Sidebar from './Sidebar';
import Image from 'react-bootstrap/Image';
import { authUser } from '../Context/Credentials';

const Headerbar = () => {

    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="https://www.lenmed.co.za/"><Image src="lenmedlogo.png" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="/hospital">Hospitals</Nav.Link>
                        <NavDropdown title={`Hi ${authUser.username}`} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleLogout}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Sidebar />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Headerbar