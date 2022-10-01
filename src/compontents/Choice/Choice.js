import React from 'react';
import Features from '../Fetures/Features';

const Choice = ({select}) => {
    const {price, title, fetures} = select;
    return (
        <div className='bg-blue-400 p-6 rounded-xl mr-6 ml-6'>
            <h3><span className='text-6xl font-bold text-white'>{price}</span><span className='text-3xl font-semibold text-white'>$ </span><span className='text-2xl text-gray-300'>/month</span></h3>
            <span className='text-xl font-semibold text-black'>{title}</span>
            {
                fetures.map((feture, idx) => <Features 
                Feture={feture}
                key={idx}
                ></Features>)
            }
            <button className='bg-green-600 text-white w-full mt-6 py-2 text-xl rounded-xl'>Purches Now</button>
        </div>
    );
};

export default Choice;