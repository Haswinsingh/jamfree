import React, { useState, useEffect } from 'react';
import { getViolationData } from '../api/mockApi';
import './Portals.css';

const GovernmentPortal = ({ user, onLogout }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            const result = await getViolationData();
            setData(result);
            setLoading(false);
        };
        fetchData();
    }, []); // The empty array means this effect runs once on component mount

    return ( <
        div className = "portal-container" >
        <
        header className = "portal-header" >
        <
        h1 > Government Portal < /h1> <
        div >
        <
        span > Welcome, { user.name } < /span> <
        button onClick = { onLogout }
        className = "logout-btn" > Logout < /button> <
        /div> <
        /header> <
        div className = "portal-content" >
        <
        h3 > AI - Powered Traffic Violations Dashboard < /h3> {
            loading ? ( <
                p > Loading data... < /p>
            ) : ( <
                div className = "dashboard" >
                <
                div className = "stat-card total" >
                <
                h4 > Total Violations Today < /h4> <
                p > { data.totalViolations } < /p> <
                /div> {
                    data.violations.map((v, index) => ( <
                        div className = "stat-card"
                        key = { index } >
                        <
                        h4 > { v.type } < /h4> <
                        p > { v.count } < /p> <
                        /div>
                    ))
                } <
                /div>
            )
        } <
        /div> <
        /div>
    );
};

export default GovernmentPortal;