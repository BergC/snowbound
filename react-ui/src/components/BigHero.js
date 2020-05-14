import React from 'react';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import skiImage from '../images/skiier.jpg';

const BigHero = () => {
    const styles = {
        backgroundImage: `url(${skiImage})`,
        backgroundSize: 'cover',
    };

    return (
        <Jumbotron style={styles}>
            <Container>
                <h1>Test</h1>
            </Container>
        </Jumbotron>
    );
};

export default BigHero;
