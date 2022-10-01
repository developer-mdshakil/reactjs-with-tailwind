import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Features = ({Feture}) => {
    return (
        <div className='flex items-center mt-6'>
                <CheckCircleIcon className="h-6 w-6 text-red-500" />
                <p className='text-xl font-medium text-white ml-1'>{Feture}</p>
            </div>
    );
};

export default Features;