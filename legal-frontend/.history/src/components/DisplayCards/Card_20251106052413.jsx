import React from 'react';

const Card = ({doc}) => {
    return (
        <div>
            <div className="card my-3 bg-base-100 w-full shadow-sm">
            <div className="card-body">
                <div className="card-actions justify-end">
                </div>
                <p>{doc.title}</p>
            </div>
            </div>
        </div>
    );
};

export default Card;