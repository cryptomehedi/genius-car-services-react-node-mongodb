import React from 'react';
import { Helmet } from 'react-helmet-async';
import Experts from './Experts';

import Services from './Services';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Genius Car Services</title>
            </Helmet>
            <Services/>
            <Experts/>
        </div>
    );
};

export default Home;