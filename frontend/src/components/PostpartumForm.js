import React, { useState } from 'react';
import axios from 'axios';

const PostpartumForm = () => {
    const [formData, setFormData] = useState({
        weight: '',
        blood_pressure: '',
        heart_rate: '',
        body_temp: '',
        vaginal_bleeding: 'Light',
        pain_level: 1,
        breastfeeding_status: false,
        sleep_hours: '',
        day_naps: '',
        mood: 'Happy',
        energy_level: 1,
        appetite: 'Good',
        hydration: '',
        bowel_movements: false,
        urination_issues: false,
        perineal_healing_notes: '',
        c_section_healing_notes: '',
        emotional_notes_or_stressors: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/postpartum-data/', formData);
            alert('Data saved successfully!');
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight (kg)" />
            <input name="blood_pressure" value={formData.blood_pressure} onChange={handleChange} placeholder="Blood Pressure" />
            {/* Add other fields similarly */}
            <button type="submit">Save</button>
        </form>
    );
};

export default PostpartumForm;
