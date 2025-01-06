// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import WeightChart from './WeightChart'; // Correct import statement

// const PostpartumTable = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/postpartum-data/');
//                 setData(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h2>Postpartum Tracker</h2>
//             <h3>Weight Trend</h3>
//             {/* Pass filtered data for weight trend */}
//             <WeightChart data={data.map(({ date, weight }) => ({ date, weight }))} />
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Date</th>
//                         <th>Weight</th>
//                         <th>Blood Pressure</th>
//                         {/* Add other headers */}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item) => (
//                         <tr key={item.id}>
//                             <td>{item.date}</td>
//                             <td>{item.weight}</td>
//                             <td>{item.blood_pressure}</td>
//                             {/* Add other fields */}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default PostpartumTable;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const PostpartumTable = () => {
//     const [data, setData] = useState([]);

//     const fetchData = async () => {
//         const token = localStorage.getItem('access_token');

//         try {
//             const response = await axios.get('http://127.0.0.1:8000/api/protected/', {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             setData(response.data);
//         } catch (error) {
//             console.error('Error fetching data:', error.response?.data);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h2>Postpartum Data</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Date</th>
//                         <th>Metric</th>
//                         <th>Value</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((row, index) => (
//                         <tr key={index}>
//                             <td>{row.date}</td>
//                             <td>{row.metric}</td>
//                             <td>{row.value}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default PostpartumTable;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const PostpartumTable = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/postpartum-data/');
//                 setData(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 alert('Failed to fetch data!');
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Date</th>
//                     <th>Weight (kg)</th>
//                     <th>Feeding Times</th>
//                     <th>Feeding Duration (min)</th>
//                     <th>Feeding Type</th>
//                     <th>Milk Quantity (ml/oz)</th>
//                     <th>Wet Diapers</th>
//                     <th>Bowel Movements</th>
//                     <th>Stool Consistency</th>
//                     <th>Sleep Hours</th>
//                     <th>Night Sleep (hrs)</th>
//                     <th>Day Naps (hrs)</th>
//                     <th>Body Temp (°F/°C)</th>
//                     <th>Rashes/ Skin Issues</th>
//                     <th>Crying Duration (min)</th>
//                     <th>Soothing Method</th>
//                     <th>Alertness/Interaction Notes</th>
//                     <th>Milestones Observed</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {data.map((entry, index) => (
//                     <tr key={index}>
//                         <td>{entry.date}</td>
//                         <td>{entry.weight}</td>
//                         <td>{entry.feedingTimes}</td>
//                         <td>{entry.feedingDuration}</td>
//                         <td>{entry.feedingType}</td>
//                         <td>{entry.milkQuantity}</td>
//                         <td>{entry.wetDiapers}</td>
//                         <td>{entry.bowelMovements}</td>
//                         <td>{entry.stoolConsistency}</td>
//                         <td>{entry.sleepHours}</td>
//                         <td>{entry.nightSleep}</td>
//                         <td>{entry.dayNaps}</td>
//                         <td>{entry.bodyTemp}</td>
//                         <td>{entry.rashes}</td>
//                         <td>{entry.cryingDuration}</td>
//                         <td>{entry.soothingMethod}</td>
//                         <td>{entry.alertnessNotes}</td>
//                         <td>{entry.milestones}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// };

// export default PostpartumTable;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewbornDataTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/newborn-data/'); // Update with your endpoint
                setData(response.data);
            } catch (error) {
                console.error('Error fetching newborn data:', error);
                alert('Failed to fetch newborn data!');
            }
        };

        fetchData();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Weight (kg)</th>
                    <th>Feeding Times</th>
                    <th>Feeding Duration (min)</th>
                    <th>Feeding Type</th>
                    <th>Milk Quantity (ml/oz)</th>
                    <th>Wet Diapers</th>
                    <th>Bowel Movements</th>
                    <th>Stool Consistency</th>
                    <th>Sleep Hours</th>
                    <th>Night Sleep (hrs)</th>
                    <th>Day Naps (hrs)</th>
                    <th>Body Temp (°F/°C)</th>
                    <th>Rashes/ Skin Issues</th>
                    <th>Crying Duration (min)</th>
                    <th>Soothing Method</th>
                    <th>Alertness/Interaction Notes</th>
                    <th>Milestones Observed</th>
                </tr>
            </thead>
            <tbody>
                {data.map((entry, index) => (
                    <tr key={index}>
                        <td>{entry.date}</td>
                        <td>{entry.weight}</td>
                        <td>{entry.feedingTimes}</td>
                        <td>{entry.feedingDuration}</td>
                        <td>{entry.feedingType}</td>
                        <td>{entry.milkQuantity}</td>
                        <td>{entry.wetDiapers}</td>
                        <td>{entry.bowelMovements}</td>
                        <td>{entry.stoolConsistency}</td>
                        <td>{entry.sleepHours}</td>
                        <td>{entry.nightSleep}</td>
                        <td>{entry.dayNaps}</td>
                        <td>{entry.bodyTemp}</td>
                        <td>{entry.rashes}</td>
                        <td>{entry.cryingDuration}</td>
                        <td>{entry.soothingMethod}</td>
                        <td>{entry.alertnessNotes}</td>
                        <td>{entry.milestones}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default NewbornDataTable;
