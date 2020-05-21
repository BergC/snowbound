import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';

const SearchOutput = ({ searchResults }) => {
    // Function to capitalize each mountain name as they're stored in lowercase.
    const capitalizeWord = (str) => {
        return str
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    // Function to iterate over daily forecast for each mountain and build forecast columns.
    const buildForecast = (forecastArr) => {
        return (
            <CardDeck>
                {forecastArr.map((dailyForecast, index) => {
                    return (
                        <Card key={index}>
                            <Card.Body>
                                <Card.Title>
                                    <Moment unix format='ddd, MMM D'>
                                        {dailyForecast.time}
                                    </Moment>
                                </Card.Title>
                                <Card.Text>
                                    There's a{' '}
                                    {dailyForecast.precipProbability * 100 +
                                        '%'}{' '}
                                    chance of {dailyForecast.precip}.{' '}
                                    {dailyForecast.precip} will be strongest at{' '}
                                    <Moment unix format='LT'>
                                        {dailyForecast.precipIntensityMaxTime}
                                    </Moment>
                                    . Expect temperatures between{' '}
                                    {dailyForecast.minTemp + 'F'} and{' '}
                                    {dailyForecast.maxTemp + 'F'}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    );
                })}
            </CardDeck>
        );
    };

    return (
        <Container>
            {searchResults ? (
                <Fragment>
                    <h2 className='section__header'>
                        Weigh your options here . . .
                    </h2>
                    <Accordion>
                        {searchResults.map((mountain, index) => {
                            return (
                                <Card key={index}>
                                    <Card.Header>
                                        <Accordion.Toggle
                                            variant='link'
                                            eventKey={index}
                                        >
                                            {capitalizeWord(mountain.name)}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={index}>
                                        <Fragment>
                                            <Card.Body>
                                                <Card.Title>
                                                    Basic Info
                                                </Card.Title>
                                                <Card.Text>
                                                    {capitalizeWord(
                                                        mountain.name
                                                    )}{' '}
                                                    is{' '}
                                                    {
                                                        mountain.distance.text.split(
                                                            ' '
                                                        )[0]
                                                    }{' '}
                                                    miles from your current
                                                    location where it's expected
                                                    to{' '}
                                                    {
                                                        mountain.forecast[0]
                                                            .precip
                                                    }{' '}
                                                    today.
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Body>
                                                <Card.Title>
                                                    3 Day Weather Forecast
                                                </Card.Title>
                                                {buildForecast(
                                                    mountain.forecast
                                                )}
                                            </Card.Body>
                                        </Fragment>
                                    </Accordion.Collapse>
                                </Card>
                            );
                        })}
                    </Accordion>
                </Fragment>
            ) : null}
        </Container>
    );
};

// SearchOutput.propTypes = {
//     searchResults: PropTypes.array.isRequired,
// };

const mapStateToProps = (state) => ({
    searchResults: state.search.searchResults.mountainsWithForecastAndSnow,
});

export default connect(mapStateToProps)(SearchOutput);
