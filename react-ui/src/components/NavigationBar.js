import React, { useState } from 'react';

// React Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Components
import ContactModal from './ContactModal';

const NavigationBar = () => {
    const [showModal, toggleShowModal] = useState(false);

    return (
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href='#home'>Snowbound</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ml-auto'>
                        <NavDropdown
                            title='APIs Used'
                            id='collasible-nav-dropdown'
                        >
                            <NavDropdown.Item
                                href='https://developers.google.com/maps/documentation/distance-matrix/start'
                                target='_blank'
                            >
                                Google Distance Matrix
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href='https://docs.mapbox.com/api/search/'
                                target='_blank'
                            >
                                Mapbox Geocode
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href='http://powderlin.es/api.html'
                                target='_blank'
                            >
                                Powderlines
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href='https://darksky.net/dev'
                                target='_blank'
                            >
                                Dark Sky Weather
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='#pricing'>About</Nav.Link>
                        <Nav.Link onClick={() => toggleShowModal(true)}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <ContactModal
                    show={showModal}
                    onHide={() => toggleShowModal(false)}
                />
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
