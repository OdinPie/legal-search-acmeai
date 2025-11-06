import React from 'react';

const Card = ({doc}) => {
    return (
        <div>
            <div className="card mt-10 bg-base-100 w-full shadow-sm">
            <div className="card-body">
                <p>{doc.title}</p>
            </div>
            </div>
        </div>
    );
};

export default Card;