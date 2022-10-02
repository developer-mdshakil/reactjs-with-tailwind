import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Assingment = () => {
    const data = [
        {name: 'Assingment 1', marks: 58, quiz: 85, amt: 2400},
        {name: 'Assingment 2', marks: 60, quiz: 95, amt: 2210},
        {name: 'Assingment 3', marks: 60, quiz: 87, amt: 2290},
        {name: 'Assingment 4', marks: 58, quiz: 90, amt: 2000},
        {name: 'Assingment 5', marks: 60, quiz: 85, amt: 2181},
        {name: 'Assingment 6', marks: 60, quiz: 95, amt: 2500},
        {name: 'Assingment 7', marks: 60, quiz: 86, amt: 2100}
      ];
    return (
        <div className='py-8'>
            <LineChart width={1000} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="marks" stroke="#82ca9d"/>
            </LineChart>
        </div>
    );
};

export default Assingment;