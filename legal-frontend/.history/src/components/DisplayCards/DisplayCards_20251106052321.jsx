import React from 'react';
import Card from './Card';
const DisplayCards = ({value = []}) => {

    return (
        <div class>
            {value && value.map(doc => <Card key={doc.id} doc={doc}></Card>)}
        </div>
    );
};

export default DisplayCards;