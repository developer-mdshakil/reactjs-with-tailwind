import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const DataBar = () => {
    const [phones, setPhones] = useState([]);

    useEffect( ()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneLoad = data.data.data;
             const phonData = phoneLoad.map(phone => {
                const parts = phone.slug.split('-');
                const price = parseInt(parts[1]);
                const singlePhone ={
                    name: phone.phone_name,
                    price: price,
                }
                return singlePhone;
            })
            setPhones(phonData)
        })
    }, [])
    return (
        <BarChart width={1000} height={300} data={phones}>
            <Bar dataKey="price" fill="blue"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
        </BarChart>
    );
};

export default DataBar;