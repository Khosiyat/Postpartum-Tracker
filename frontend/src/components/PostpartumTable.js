import React from 'react';

const PostpartumTable = ({ data }) => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Postpartum Data About Newborn Baby</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2', borderBottom: '2px solid #ddd' }}>
                        <th style={{ padding: '8px', textAlign: 'center' }}>Date</th>
                        <th style={{ padding: '8px', textAlign: 'center' }}>Weight (kg)</th>
                        <th style={{ padding: '8px', textAlign: 'center' }}>Feeding Times</th>
                        <th style={{ padding: '8px', textAlign: 'center' }}>Feeding Duration (min)</th>
                        <th style={{ padding: '8px', textAlign: 'center' }}>Feeding Type</th>
                        <th style={{ padding: '8px', textAlign: 'center' }}>Milk Quantity (ml/oz)</th>
                        <th style={{ padding: '8px', textAlign: 'center' }}>Wet Diapers</th>
                        <th style={{ padding: '8px', textAlign: 'center' }}>Bowel Movements</th>
                        <th style={{ padding: '8px', textAlign: 'center' }}>Stool Consistency</th>
                        <th style={{ padding: '8px', textAlign: 'center' }}>Sleep Hours</th>
                        <th style={{ padding: '8px', textAlign: 'center' }}>Night Sleep (hrs)</th>
                        <th style={{ padding: '8px', textAlign: 'center' }}>Day Naps (hrs)</th>
                        <th style={{ padding: '8px', textAlign: 'center' }}>Body Temp (°F/°C)</th>
                        <th style={{ padding: '8px', textAlign: 'center' }}>Rashes/ Skin Issues</th>
                        <th style={{ padding: '8px', textAlign: 'center' }}>Crying Duration (min)</th>
                        <th style={{ padding: '8px', textAlign: 'center' }}>Soothing Method</th>
                        <th style={{ padding: '8px', textAlign: 'center' }}>Alertness/ Interaction Notes</th>
                        <th style={{ padding: '8px', textAlign: 'center' }}>Milestones Observed</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, index) => (
                        <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ padding: '8px', textAlign: 'center' }}>{entry.date}</td>
                            <td style={{ padding: '8px', textAlign: 'center' }}>{entry.weight}</td>
                            <td style={{ padding: '8px', textAlign: 'center' }}>{entry.feedingTimes}</td>
                            <td style={{ padding: '8px', textAlign: 'center' }}>{entry.feedingDuration}</td>
                            <td style={{ padding: '8px', textAlign: 'center' }}>{entry.feedingType}</td>
                            <td style={{ padding: '8px', textAlign: 'center' }}>{entry.milkQuantity}</td>
                            <td style={{ padding: '8px', textAlign: 'center' }}>{entry.wetDiapers}</td>
                            <td style={{ padding: '8px', textAlign: 'center' }}>{entry.bowelMovements}</td>
                            <td style={{ padding: '8px', textAlign: 'center' }}>{entry.stoolConsistency}</td>
                            <td style={{ padding: '8px', textAlign: 'center' }}>{entry.sleepHours}</td>
                            <td style={{ padding: '8px', textAlign: 'center' }}>{entry.nightSleep}</td>
                            <td style={{ padding: '8px', textAlign: 'center' }}>{entry.dayNaps}</td>
                            <td style={{ padding: '8px', textAlign: 'center' }}>{entry.bodyTemp}</td>
                            <td style={{ padding: '8px', textAlign: 'center' }}>{entry.rashes}</td>
                            <td style={{ padding: '8px', textAlign: 'center' }}>{entry.cryingDuration}</td>
                            <td style={{ padding: '8px', textAlign: 'center' }}>{entry.soothingMethod}</td>
                            <td style={{ padding: '8px', textAlign: 'center' }}>{entry.alertnessNotes}</td>
                            <td style={{ padding: '8px', textAlign: 'center' }}>{entry.milestones}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PostpartumTable;
