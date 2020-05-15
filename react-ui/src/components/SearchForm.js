import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchForm = () => {
    return (
        <Container>
            <div className='search-form__container'>
                <h2 className='section__header'>
                    Input search criteria here . . .
                </h2>
                <Form>
                    <Form.Row controlId='formGridAddress1'>
                        <Form.Label>Street Address</Form.Label>
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
                            <Form.Label>Travel Criteria</Form.Label>
                            <Form.Control as='select' value='Choose...'>
                                <option>Choose...</option>
                                <option>Distance</option>
                                <option>Duration</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='formGridMaxTravel'>
                            <Form.Label>Max Travel</Form.Label>
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
