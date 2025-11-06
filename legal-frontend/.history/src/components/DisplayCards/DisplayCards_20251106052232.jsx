import React from 'react';
import Card from './Card';
const DisplayCards = ({value = []}) => {

    return (
        <div>
            {value && value.map(doc => <Card key={} doc={doc}></Card>)}
        </div>
    );
};

export default DisplayCards;