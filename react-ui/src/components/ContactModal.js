import React from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

// React Bootstrap
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ContactModal = (props) => {
    return (
        <Modal className='contact-modal' {...props} size='lg' centered>
            <Modal.Body>
                <ul id='contact-modal__links'>
                    <li className='contact-modal__links-item'>
                        <a
                            href='https://www.linkedin.com/in/christopher-berg-159b23b5/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                        </a>
                    </li>
                    <li className='contact-modal__links-item'>
                        <a
                            href='https://github.com/BergC'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FontAwesomeIcon icon={faGithub} /> Github{' '}
                        </a>
                    </li>
                    <li className='contact-modal__links-item'>
                        <a
                            href='https://stackoverflow.com/users/11904900/paoiherpoais'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FontAwesomeIcon icon={faStackOverflow} />{' '}
                            Stackoverflow{' '}
                        </a>
                    </li>
                </ul>
            </Modal.Body>
            <Modal.Footer className='contact-modal__footer'>
                <Button variant='outline-primary' onClick={props.onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ContactModal;
