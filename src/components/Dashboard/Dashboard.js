import React from 'react';
import FirstChart from '../FirstChart/FirstChart';
import SpecialChart from '../SpecialChart/SpecialChart';

const Dashboard = () => {
    return (
        <div>
            <h2>Normal Chart</h2>
            <FirstChart></FirstChart>
            <SpecialChart></SpecialChart>
        </div>
    );
};

export default Dashboard;