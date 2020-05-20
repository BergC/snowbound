import React, { Fragment } from 'react';

// Components
import BigHero from './components/BigHero';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import SearchForm from './components/SearchForm';
import SearchOutput from './components/SearchOutput';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Styles
import './App.scss';

const App = () => (
    <Provider store={store}>
        <NavigationBar />
        <BigHero />

        <SearchForm />
        <SearchOutput />
        <Footer />
    </Provider>
);

export default App;
