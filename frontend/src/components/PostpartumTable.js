import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostpartumTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/postpartum-data/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Weight</th>
                    <th>Blood Pressure</th>
                    {/* Add other headers */}
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.date}</td>
                        <td>{item.weight}</td>
                        <td>{item.blood_pressure}</td>
                        {/* Add other fields */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PostpartumTable;
