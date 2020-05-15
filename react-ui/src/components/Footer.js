import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
    <footer id='footer'>
        <div>
            <ul id='footer__list'>
                <li className='footer__list-item'>
                    <a
                        href='https://www.linkedin.com/in/christopher-berg-159b23b5/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </a>
                </li>
                <li className='footer__list-item'>
                    <a
                        href='https://github.com/BergC'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FontAwesomeIcon icon={faGithub} /> Github{' '}
                    </a>
                </li>
                <li className='footer__list-item'>
                    <a
                        href='https://stackoverflow.com/users/11904900/paoiherpoais'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FontAwesomeIcon icon={faStackOverflow} /> Stackoverflow{' '}
                    </a>
                </li>
            </ul>
        </div>

        <div id='footer__copyright'>
            <span>
                <FontAwesomeIcon icon={faCopyright} /> Christopher Berg
            </span>
        </div>
    </footer>
);

export default Footer;
