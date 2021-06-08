// Core libraries
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

// Custom functions
import { searchMountains } from '../actions/search';

const SearchForm = ({ loading, searchMountains }) => {
    // State used for search query.
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

    const onSubmit = (e) => {
        e.preventDefault();

        let formDataFormatted = {
            mountainState: 'washington',
            upperBound: formData.search.max.toLowerCase(),
            filterBy: formData.search.filter.toLowerCase(),
        };

        let formatteddAddress = Object.values(formData.address).map(
            (addressItem) => {
                return addressItem.trim().toLowerCase();
            }
        );

        formDataFormatted.address = formatteddAddress.join(' ');

        console.log(formDataFormatted);
        // console.log('hello');
        searchMountains(formDataFormatted);
    };

    return (
        <Container className='container--content'>
            <div className='search-form__container'>
                <h2 className='section-header'>
                    Input search criteria here . . .
                </h2>
                <Form onSubmit={(e) => onSubmit(e)}>
                    <Form.Row controlId='formGridAddress1'>
                        <OverlayTrigger
                            placement='right'
                            overlay={
                                <Tooltip className='search-form__tooltip'>
                                    Input the address that you'll be travelling
                                    to the mountains from. Currently only
                                    available in Western Washington.
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
                            placeholder='Currently only works for Western WA addresses'
                            name='address_street'
                            required={true}
                        />
                    </Form.Row>

                    <Form.Row className='search-form__group--flexspace'>
                        <Form.Group controlId='formGridCity'>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                name='address_city'
                                onChange={(e) => onChange(e)}
                                required={true}
                            />
                        </Form.Group>

                        <Form.Group controlId='formGridState'>
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                onChange={(e) => onChange(e)}
                                as='select'
                                value={state}
                                name='address_state'
                                required={true}
                            >
                                <option>WA</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='formGridZip'>
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                name='address_zip'
                                onChange={(e) => onChange(e)}
                                required={true}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className='search-form__group--flexeven'>
                        <Form.Group controlId='formGridTravelCriteria'>
                            <OverlayTrigger
                                placement='right'
                                overlay={
                                    <Tooltip className='search-form__tooltip'>
                                        Dictate what search results are filtered
                                        by. Currently only distance is
                                        available.
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
                                required={true}
                                value={filterBy}
                            >
                                <option>Distance</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='formGridMaxTravel'>
                            <OverlayTrigger
                                placement='right'
                                overlay={
                                    <Tooltip className='search-form__tooltip'>
                                        Input maximum number of miles you're
                                        willing to travel.
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
                                placeholder='e.g. 100'
                                required={true}
                                type='number'
                            />{' '}
                        </Form.Group>
                    </Form.Row>

                    <div id='search-button'>
                        <Button
                            variant='outline-primary'
                            type='submit'
                            disabled={!!loading}
                        >
                            {loading ? 'Loading...' : 'Search'}
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

SearchForm.propTypes = {
    searchMountains: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    loading: state.search.loading,
});

export default connect(mapStateToProps, { searchMountains })(SearchForm);
