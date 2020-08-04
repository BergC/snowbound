import React from 'react';
import { Element } from 'react-scroll';

import Container from 'react-bootstrap/Container';

const About = () => {
    return (
        <Container className='container--content about'>
            <h2 className='section-header'>
                <Element name='about'>About . . .</Element>
            </h2>
            <p>
                There's nothing worse than spending a day with 3 inches of fresh
                snow and 30 minute lift lines before receiving a text from a
                friend 60 miles away at a neighbouring mountain where it's
                dumping buckets of snow.
            </p>

            <p>
                I got tired of opening a browser tab for every mountain within a
                driveable radius to check which mountain had ideal conditions.
                As someone who lives in the PNW and likes to ski, I wanted a
                single place to view all of the mountains I'm willing to travel
                to.
            </p>

            <p>
                I decided to build this website, which uses 3rd party APIs, to
                build a comprehensive weather forecast and snow quality report
                for mountains within a specified driving distance so that users
                can quickly determine where they'd like to spend the day.
            </p>

            <p>
                Please feel free to message me on LinkedIn with new feature
                suggestions.
            </p>
        </Container>
    );
};

export default About;
