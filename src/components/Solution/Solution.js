import React from 'react';
import './Solution.css';
import { FaSatellite, FaVideo, FaMapMarkedAlt, FaBrain } from 'react-icons/fa';

const Solution = () => {
    return ( <
        section id = "solution"
        className = "solution-section" >
        <
        div className = "container" >
        <
        h2 > Our Integrated Solution < /h2> <
        div className = "solution-flow" > { /* Step 1: Data Collection */ } <
        div className = "flow-step data-sources" >
        <
        div className = "flow-card" > < FaSatellite / > < span > Satellite Images < /span></div >
        <
        div className = "flow-card" > < FaVideo / > < span > Smart Cameras < /span></div >
        <
        div className = "flow-card" > < FaMapMarkedAlt / > < span > GMap Features < /span></div >
        <
        /div>

        { /* Corrected Arrow Below */ } <
        div className = "flow-arrow" > ↓ < /div>

        { /* Step 2: Central System */ } <
        div className = "flow-step central-system" >
        <
        div className = "flow-card main-system" > < FaBrain / > < span > AI - Powered Traffic Management System < /span></div >
        <
        /div>

        { /* Corrected Arrow Below */ } <
        div className = "flow-arrow" > ↓ < /div>

        { /* Step 3: Action */ } <
        div className = "flow-step actions" >
        <
        div className = "flow-card" > < span > Change Signals < /span></div >
        <
        div className = "flow-card" > < span > Divert Traffic < /span></div >
        <
        div className = "flow-card" > < span > Provide Alerts < /span></div >
        <
        /div> <
        /div> <
        p className = "solution-summary" >
        We integrate satellite images, Google Maps, and smart cameras
        for real - time monitoring.Our AI algorithms analyze this data to predict traffic flow and implement adaptive signal control, ensuring a balanced flow and reduced congestion. <
        /p> <
        /div> <
        /section>
    );
};

export default Solution;