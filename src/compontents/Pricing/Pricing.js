import React from 'react';
import Choice from '../Choice/Choice';

const Pricing = () => {
    const pricingOptions = [
        {id: 21, title: 'Free Courses', price: 0, feture:[
            'Beginer friendly web design', 'InterMidyate responsive design',
            'InterMidate Vanila javaScript' , 'InterMidyate React concept',
            'Simple single page apllication create learn',
            'Beginer react router'
        ]},
        {id: 23, title: 'Premium Courses', price: 9.0, feture:[
            'Advanced friendly web design', 'InterMidyate responsive design',
            'Advanced ES6 javaScript' , 'InterMidyate React and ES6 core concept',
            'Advanced single page apllication create learn',
            'InterMidate react router'
        ]},
        {id: 25, title: 'Professional Courses', price: 50, feture:[
            'Adnvanced and professional web design', 'Addvanced responsive design',
            'Adnvaced and Professional ES6 javaScript' , 'Advanced React concept',
            'Professional single page apllication create learn',
            'Advanced react router'
        ]},
    ]
    return (
        <div className='py-6 bg-gray-200'>
            <h3 className='text-5xl font-semibold text-blue-500'>Best Deal of Town</h3>
            <div className='grid grid-cols-3 gap-8 mt-10'>
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