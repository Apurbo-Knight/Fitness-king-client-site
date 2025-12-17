import React from 'react';
import Banner from '../Home/Banner'
import Featured from './Featured';
import About from './About';
import Testimonials from './Testimonials';

import Team from './Team';
import FeaturedClass from './FeaturedClass';
import Forum from './Forum';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Fitness king | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <About></About>
            <FeaturedClass></FeaturedClass>
            <Testimonials></Testimonials>
            <Forum></Forum>
            
            <Team></Team>
        </div>
    );
};

export default Home;