import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='flex flo items-center justify-center text-center mt-20'>
                {/*Banner writings here  */}
                <h1 className='!text-3xl font-bold'>Your Legal Library, <span className='text-green-200'>Simplified.</span></h1>
                <p className='mt-4'>Discover, explore, and understand legal documents with ease — anytime, anywhere.</p>
            </div>
        </div>
    );
};

export default Banner;