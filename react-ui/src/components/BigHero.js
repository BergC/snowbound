import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import imageOne from '../images/chrismobile2.jpg';
import buriedhouses from '../images/buriedhouses2.jpg';
import searching from '../images/search2.jpg';

const BigHero = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={searching}
                    alt='First slide'
                />
                <Carousel.Caption>
                    <h3>Search</h3>
                    <p>
                        Dictate desired distance or travel time when searching
                        for mountain conditions.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={buriedhouses}
                    alt='Third slide'
                />

                <Carousel.Caption>
                    <h3>Select</h3>
                    <p>
                        View the conditions of each mountain within your search
                        range in a single browser.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={imageOne}
                    alt='Third slide'
                />

                <Carousel.Caption>
                    <h3>Ski</h3>
                    <p>
                        Use search results to determine which mountain's
                        conditions are best for you.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default BigHero;
