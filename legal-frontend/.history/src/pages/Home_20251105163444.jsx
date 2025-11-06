import React from 'react';
import SearchSection from '../components/SearchSection';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
const Home = () => {
    return (
        <div className='bg-orange-50 min-h-screen min-w-screen'>
            <Navbar></Navbar>
            <Banner></Banner>
            {/* <SearchSection></SearchSection> */}
            {/* Your Legal Library, Simplified.
                Discover, explore, and understand legal documents with ease — anytime, anywhere. */}
        </div>
    );
};

export default Home;