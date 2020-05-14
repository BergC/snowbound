import React, { Fragment } from 'react';

// Components
import BigHero from './components/BigHero';
import NavigationBar from './components/NavigationBar';
import SearchForm from './components/SearchForm';

// Styles
import './App.scss';

const App = () => (
    <Fragment>
        <NavigationBar />
        <BigHero />
        <SearchForm />
    </Fragment>
);

export default App;
