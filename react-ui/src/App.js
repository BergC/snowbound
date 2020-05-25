import React, { Fragment } from 'react';

// Components
import About from './components/About';
import BigHero from './components/BigHero';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import SearchForm from './components/SearchForm';
import SearchOutput from './components/SearchOutput';
import SectionSplit from './components/SectionSplit';

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
        <SectionSplit />
        <About />
        <Footer />
    </Provider>
);

export default App;
