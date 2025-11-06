import React from 'react';

const Card = ({doc}) => {
    return (
        <div>
            <div className="card mt-10 bg-base-100 w-full shadow-sm">
            <div className="card-body text-left">
                <h5 className='font-semibold '>{doc.title}</h5>
                <p></p>

            </div>
            </div>
        </div>
    );
};

export default Card;