import React from 'react'
import './Table.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
const Table = ({ API, title }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(API)
            .then(response => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);
    const array = ['USD','CAD','EUR', 'INR', 'JPY', 'CHF','AUD'];
    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <div className='Table'>
            <tr>
                <th><td style={{color:"red"}}>{title}</td></th>
                {array.map(currency => (
                    <td>{user.conversion_rates[currency]}</td>
                ))}
            </tr>
        </div>
    )
}

export default Table
