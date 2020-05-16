import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const SearchForm = () => {
    return (
        <Container>
            <div className='search-form__container'>
                <h2 className='section__header'>
                    Input search criteria here . . .
                </h2>
                <Form>
                    <Form.Row controlId='formGridAddress1'>
                        <OverlayTrigger
                            placement='right'
                            overlay={
                                <Tooltip className='search-form__tooltip'>
                                    Input the address that you'll be travelling
                                    to the mountains from.
                                </Tooltip>
                            }
                        >
                            <Form.Label>
                                <FontAwesomeIcon icon={faQuestionCircle} />{' '}
                                Street Address
                            </Form.Label>
                        </OverlayTrigger>
                        <Form.Control placeholder='1234 Main St' />
                    </Form.Row>

                    <Form.Row className='search-form__group--flexspace'>
                        <Form.Group controlId='formGridCity'>
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group controlId='formGridState'>
                            <Form.Label>State</Form.Label>
                            <Form.Control as='select' value='Choose...'>
                                <option>Choose...</option>
                                <option>Washington</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='formGridZip'>
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className='search-form__group--flexeven'>
                        <Form.Group controlId='formGridTravelCriteria'>
                            <OverlayTrigger
                                placement='right'
                                overlay={
                                    <Tooltip className='search-form__tooltip'>
                                        Dictate whether search results are
                                        filtered by distance from current
                                        location or travel time from current
                                        location.
                                    </Tooltip>
                                }
                            >
                                <Form.Label>
                                    <FontAwesomeIcon icon={faQuestionCircle} />{' '}
                                    Travel Criteria
                                </Form.Label>
                            </OverlayTrigger>
                            <Form.Control as='select' value='Choose...'>
                                <option>Choose...</option>
                                <option>Distance</option>
                                <option>Duration</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='formGridMaxTravel'>
                            <OverlayTrigger
                                placement='right'
                                overlay={
                                    <Tooltip className='search-form__tooltip'>
                                        Input maximum number of miles or amount
                                        of time you're willing to travel.
                                    </Tooltip>
                                }
                            >
                                <Form.Label>
                                    <FontAwesomeIcon icon={faQuestionCircle} />{' '}
                                    Max Travel
                                </Form.Label>
                            </OverlayTrigger>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <div id='search-button'>
                        <Button variant='outline-primary' type='submit'>
                            Search
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default SearchForm;
