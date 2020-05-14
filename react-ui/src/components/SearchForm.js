import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchForm = () => {
    return (
        <Container>
            <Form>
                <Form.Row controlId='formGridAddress1'>
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control placeholder='1234 Main St' />
                </Form.Row>

                <Form.Row className='search-form__location'>
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

                <Button variant='outline-success' type='submit'>
                    Search
                </Button>
            </Form>
        </Container>
    );
};

export default SearchForm;
