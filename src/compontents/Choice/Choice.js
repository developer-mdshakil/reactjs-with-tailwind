import React from 'react';
import Features from '../Fetures/Features';

const Choice = ({select}) => {
    const {price, title,id, feture} = select;
    return (
        <div className='bg-blue-400 p-6 rounded-xl mr-6 ml-6'>
            <h2 className='text-5xl font-bold mb-4 text-white'>{price}$ /<span className='text-xl text-gray-300'>month</span></h2>
            <span className='text-xl font-semibold text-black'>{title}</span>
            <ul>
                {
                    feture.map(learn => <Features
                         learn={learn}
                    ></Features>)
                }
            </ul>
        </div>
    );
};

export default Choice;