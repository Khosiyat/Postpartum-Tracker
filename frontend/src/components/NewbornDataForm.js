import React, { useState } from 'react';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Add API call to save the data
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
