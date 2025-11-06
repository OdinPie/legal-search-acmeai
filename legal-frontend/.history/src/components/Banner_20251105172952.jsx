import React from 'react';
import SearchSection from './SearchSection';

const Banner = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center text-center mt-20'>
                {/*Banner writings here  */}
                <h1 className='!text-3xl font-bold text-[#1A3E72]'>Your Legal Library, <span className='text-green-200'>Simplified.</span></h1>
                <p className='mt-4'>Discover, explore, and understand legal documents with ease — <span className='font-bold'>anytime, anywhere.</span></p>
                <SearchSection></SearchSection>
            </div>
        </div>
    );
};

export default Banner;