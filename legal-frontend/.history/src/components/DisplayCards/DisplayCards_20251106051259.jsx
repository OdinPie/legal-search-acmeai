import React from 'react';
import C
import Card from './Card';
const DisplayCards = ({value = []}) => {

    return (
        <div>
            {value && value.map(doc => <Card></Card>)}
        </div>
    );
};

export default DisplayCards;