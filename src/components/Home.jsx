// components/Home.jsx

import React from 'react';
import Footer from './Footer';
import Hero from './Hero';
import Contact from './Contact';

const Home = () => {
    return (
        <>
        <div style={{ background: 'linear-gradient(264.47deg, #000848 29.39%, #000848 93.49%)' }} className="min-h-screen">
            <Hero />
        </div>
            <Contact/>
            <Footer />
        
        </>
    );
};

export default Home;
