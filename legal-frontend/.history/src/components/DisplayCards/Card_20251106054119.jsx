import React from 'react';

const Card = ({doc}) => {
    return (
        <div>
            <div className="card mt-10 bg-base-100 w-full shadow-sm cur">
            <div className="card-body text-left">
                <h5 className='font-semibold '>{doc.title}</h5>
                <div className="badge badge-info">
                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></circle><path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></path><circle cx="12" cy="7.25" r="1.25" fill="currentColor" strokeWidth="2"></circle></g></svg>
                    {doc.category}
                    </div>
                <p>{doc.summary}</p>
                <div className='flex gap-2'>
                    {doc.keywords.length && doc.keywords.map(tag=><div className="badge badge-neutral badge-outline">{tag}</div>)
                }
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card;