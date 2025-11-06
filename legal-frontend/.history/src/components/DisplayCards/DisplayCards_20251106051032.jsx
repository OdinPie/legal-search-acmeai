import React from 'react';

const DisplayCards = ({value = []}) => {

    return (
        <div>
            {value && value.map(doc)=> <Card}
        </div>
    );
};

export default DisplayCards;