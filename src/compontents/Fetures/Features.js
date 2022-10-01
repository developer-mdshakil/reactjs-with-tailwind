import React from 'react';

const Features = ({learn}) => {
    console.log(learn)
    return (
        <div className='text-left'>
            <li>{learn}</li>
        </div>
    );
};

export default Features;