import React from 'react';

const Card = ({doc}) => {
    return (
        <div>
            <div className="card mt-10 bg-base-100 w-full shadow-sm">
            <div className="card-body">
                <h5 className='font-semibold text-left'>{doc.title}</h5>
                

            </div>
            </div>
        </div>
    );
};

export default Card;