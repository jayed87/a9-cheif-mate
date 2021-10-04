import React from 'react';
import Banner from '../Banner/Banner';
import HomeSecOne from '../HomeSecOne/HomeSecOne';
import HomeSecTwo from '../HomeSecTwo/HomeSecTwo';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeSecOne></HomeSecOne>
            <HomeSecTwo></HomeSecTwo>
        </div>
    );
};

export default Home;