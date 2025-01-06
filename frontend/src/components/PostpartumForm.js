// import React, { useState } from 'react';
// import axios from 'axios';

// const RegisterForm = ({ setIsRegistered }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const handleRegister = async (e) => {
//         e.preventDefault();
        
//         if (password !== confirmPassword) {
//             alert('Passwords do not match!');
//             return;
//         }

//         try {
//             const response = await axios.post('http://127.0.0.1:8000/api/register/', {
//                 username,
//                 password,
//             });
//             alert('Registration successful! You can now login.');
//             setIsRegistered(true); // Set the state to show the login form
//         } catch (error) {
//             console.error('Registration failed:', error);
//             alert('Registration failed. Please try again.');
//         }
//     };

//     return (
//         <div>
//             <h2>Create a New Account</h2>
//             <form onSubmit={handleRegister}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Confirm Password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default RegisterForm;



import React, { useState } from 'react';
import axios from 'axios';

const PostpartumForm = ({ onDataAdded }) => {
    const [formData, setFormData] = useState({
        date: '',
        weight: '',
        feedingTimes: '',
        feedingDuration: '',
        feedingType: '',
        milkQuantity: '',
        wetDiapers: '',
        bowelMovements: '',
        stoolConsistency: '',
        sleepHours: '',
        nightSleep: '',
        dayNaps: '',
        bodyTemp: '',
        rashes: '',
        cryingDuration: '',
        soothingMethod: '',
        alertnessNotes: '',
        milestones: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // If you have a backend, send data here
            await axios.post('http://127.0.0.1:8000/api/postpartum-data/', formData);
            alert('Data added successfully!');
            if (onDataAdded) onDataAdded(formData); // Update local state if necessary
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('Failed to submit data!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="date" type="date" onChange={handleChange} value={formData.date} placeholder="Date" required />
            <input name="weight" type="number" step="0.01" onChange={handleChange} value={formData.weight} placeholder="Weight (kg)" required />
            <input name="feedingTimes" type="number" onChange={handleChange} value={formData.feedingTimes} placeholder="Feeding Times" required />
            <input name="feedingDuration" type="number" onChange={handleChange} value={formData.feedingDuration} placeholder="Feeding Duration (min)" />
            <input name="feedingType" type="text" onChange={handleChange} value={formData.feedingType} placeholder="Feeding Type" />
            <input name="milkQuantity" type="number" onChange={handleChange} value={formData.milkQuantity} placeholder="Milk Quantity (ml/oz)" />
            <input name="wetDiapers" type="number" onChange={handleChange} value={formData.wetDiapers} placeholder="Wet Diapers" />
            <input name="bowelMovements" type="number" onChange={handleChange} value={formData.bowelMovements} placeholder="Bowel Movements" />
            <input name="stoolConsistency" type="text" onChange={handleChange} value={formData.stoolConsistency} placeholder="Stool Consistency" />
            <input name="sleepHours" type="number" onChange={handleChange} value={formData.sleepHours} placeholder="Sleep Hours" />
            <input name="nightSleep" type="number" onChange={handleChange} value={formData.nightSleep} placeholder="Night Sleep (hrs)" />
            <input name="dayNaps" type="number" onChange={handleChange} value={formData.dayNaps} placeholder="Day Naps (hrs)" />
            <input name="bodyTemp" type="number" step="0.1" onChange={handleChange} value={formData.bodyTemp} placeholder="Body Temp (°F/°C)" />
            <input name="rashes" type="text" onChange={handleChange} value={formData.rashes} placeholder="Rashes/ Skin Issues" />
            <input name="cryingDuration" type="number" onChange={handleChange} value={formData.cryingDuration} placeholder="Crying Duration (min)" />
            <input name="soothingMethod" type="text" onChange={handleChange} value={formData.soothingMethod} placeholder="Soothing Method" />
            <input name="alertnessNotes" type="text" onChange={handleChange} value={formData.alertnessNotes} placeholder="Alertness/Interaction Notes" />
            <input name="milestones" type="text" onChange={handleChange} value={formData.milestones} placeholder="Milestones Observed" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default PostpartumForm;
