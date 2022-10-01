import React from 'react';
import Choice from '../Choice/Choice';

const Pricing = () => {
    const pricingOptions = [
        {id: 21, title: 'Free Courses', price: 0, fetures:[
            'Beginer friendly web design', 'InterMidyate responsive design',
            'InterMidate Vanila javaScript' , 'InterMidyate React concept',
            'Simple single page apllication create',
            'Beginer react router'
        ]},
        {id: 23, title: 'Premium Courses', price: 9.0, fetures:[
            'Advanced friendly web design', 'InterMidyate responsive design',
            'Advanced ES6 javaScript' , 'InterMidyate React and ES6 core concept',
            'Advanced single page apllication create',
            'InterMidate react router'
        ]},
        {id: 25, title: 'Professional Courses', price: 50, fetures:[
            'Adnvanced and professional web design', 'Addvanced responsive design',
            'Adnvaced and Professional ES6 javaScript' , 'Advanced React concept',
            'Professional single page apllication create',
            'Advanced react router'
        ]},
    ]
    return (
        <div className='pt-6 pb-20 bg-gray-200'>
            <h3 className='text-5xl font-semibold text-blue-500'>Best Learn of The Day!</h3>
            <div className='grid md:grid-cols-3 gap-8 mt-10'>
            {
                pricingOptions.map(choice => <Choice 
                    key={choice.id} 
                    select={choice}
                    ></Choice>)
            }
            </div>
        </div>
    );
};

export default Pricing;