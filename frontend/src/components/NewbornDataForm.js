import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for API calls

function NewbornDataForm() {
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
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/postpartum-data/',
                formData
            );

            if (response.status === 201) {
                alert('Data submitted successfully!');
                setFormData({
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
                }); // Reset form fields
            }
        } catch (error) {
            console.error('Error submitting data:', error);

            if (error.response) {
                alert(`Failed to submit data! Error: ${error.response.data.message || 'Unknown error'}`);
            } else if (error.request) {
                alert('Failed to submit data! Network error.');
            } else {
                alert(`Failed to submit data! ${error.message}`);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Newborn Data Input</h2>
            {Object.keys(formData).map((field) => (
                <div key={field}>
                    <label>
                        {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}:
                        <input
                            type="text"
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
}

export default NewbornDataForm;
