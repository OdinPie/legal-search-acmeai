import React from 'react';

const DisplayCards = ({value = []}) => {

    return (
        <div>
            {value && value.map()}
        </div>
    );
};

export default DisplayCards;