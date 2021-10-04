import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to='/home'>Cheif<span style={{ color: "#f28054" }}>Mate</span></Navbar.Brand>
                    <Nav className="justify-content-center ">
                        <Link className="nav-link" to='/home'>Home</Link>
                        <Link className="nav-link" to='/services'>Services</Link>
                        <Link className="nav-link" to='/about'>About</Link>
                        <Link className="nav-link" to='/contact'>Contact Us</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;