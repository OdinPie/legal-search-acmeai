import React from 'react';
import Card from './Card';
const DisplayCards = ({value = [], onSelect}) => {

    return (
        <div className='my-5'>
            {value && value.map(doc => <Card key={doc.id} doc={doc} onClick={()=>onSelect?.(doc)}></Card>)}
        </div>
    );
};

export default DisplayCards;