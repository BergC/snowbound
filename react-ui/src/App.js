import React, { Fragment } from 'react';

// Components
import BigHero from './components/BigHero';
import NavigationBar from './components/NavigationBar';

// Styles
import './App.scss';

const App = () => (
    <Fragment>
        <NavigationBar />
        <BigHero />
    </Fragment>
);

export default App;
