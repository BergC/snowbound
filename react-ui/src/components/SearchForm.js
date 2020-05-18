import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const SearchForm = () => {
    const [formData, setFormData] = useState({
        address: {
            street: '',
            city: '',
            state: '',
            zip: '',
        },
        search: {
            filter: 'distance',
            max: 0,
        },
    });

    const { state, filterBy } = formData;

    const onChange = (e) => {
        const parent = e.target.name.split('_')[0];
        const child = e.target.name.split('_')[1];

        setFormData({
            ...formData,
            [parent]: {
                ...formData[parent],
                [child]: e.target.value,
            },
        });

        // console.log(e.target.name);
    };

    return (
        <Container>
            <div className='search-form__container'>
                <h2 className='section__header'>
                    Input search criteria here . . .
                </h2>
                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log(formData);
                    }}
                >
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
                        <Form.Control
                            onChange={(e) => onChange(e)}
                            placeholder='1234 Main St'
                            name='address_street'
                        />
                    </Form.Row>

                    <Form.Row className='search-form__group--flexspace'>
                        <Form.Group controlId='formGridCity'>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                name='address_city'
                                onChange={(e) => onChange(e)}
                            />
                        </Form.Group>

                        <Form.Group controlId='formGridState'>
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                onChange={(e) => onChange(e)}
                                as='select'
                                value={state}
                                name='address_state'
                            >
                                <option>Choose...</option>
                                <option>Washington</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='formGridZip'>
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                name='address_zip'
                                onChange={(e) => onChange(e)}
                            />
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
                            <Form.Control
                                name='search_filter'
                                onChange={(e) => onChange(e)}
                                as='select'
                                value={filterBy}
                            >
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
                            <Form.Control
                                name='search_max'
                                onChange={(e) => onChange(e)}
                            />
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
