import React from 'react';

const Choice = ({select}) => {
    const {price, title} = select;
    return (
        <div className='bg-blue-400 p-6 rounded-xl mr-6 ml-6'>
            <h2 className='text-5xl font-bold mb-4 text-white'>{price}$ /<span className='text-xl text-gray-300'>month</span></h2>
            <span className='text-xl font-semibold text-black'>{title}</span>
        </div>
    );
};

export default Choice;