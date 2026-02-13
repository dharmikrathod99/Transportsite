import React from 'react';
import { Navbar, Container, Form, Button, Nav } from 'react-bootstrap';
import { FaSearch, FaSun, FaGlobe, FaShoppingCart, FaEnvelope, FaBell } from 'react-icons/fa';
// import './Header.css'

const Header = ({ toggleSidebar, sidebarOpen }) => {
    return (
        <Navbar
            bg="white"
            expand="lg"
            className="shadow-sm sticky-top"
            style={{ zIndex: 1030 }}
        >
            <Container fluid>
                <Button
                    variant="light"
                    className="me-3 d-lg-none rounded-circle p-2"
                    onClick={toggleSidebar}
                >
                    {sidebarOpen ? '✕' : '☰'}
                </Button>

                <Navbar.Brand href="#" className="d-flex align-items-center fw-bold fs-4">
                    <img
                        src="/assets/logo.png"
                        alt="MyDashboard"
                        width="40"
                        height="40"
                        className="me-2"
                    />
                    MyDashboard
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-none d-lg-flex" />

                <div className="d-flex align-items-center ms-auto gap-3">
                    {/* Search - visible on larger screens */}
                    <Form className="d-none d-md-flex">
                        <Form.Control
                            type="search"
                            placeholder="quick finding..."
                            className="rounded-pill px-4"
                            style={{ width: '280px' }}
                        />
                    </Form>

                    <Nav className="gap-2">
                        <Button variant="light" className="rounded-circle p-2"><FaSun /></Button>
                        <Button variant="light" className="rounded-circle p-2"><FaGlobe /></Button>
                        <Button variant="light" className="rounded-circle p-2"><FaShoppingCart /></Button>
                        <Button variant="light" className="rounded-circle p-2"><FaEnvelope /></Button>
                        <Button variant="light" className="rounded-circle p-2 position-relative">
                            <FaBell />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                3
                            </span>
                        </Button>
                    </Nav>

                    <Button variant="outline-primary" className="rounded-pill px-4 d-none d-md-block">
                        SIGN IN
                    </Button>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;