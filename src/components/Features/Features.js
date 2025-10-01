import React from 'react';
import './Features.css';
import { MdTraffic, MdAltRoute, MdAnalytics, MdNotificationsActive } from 'react-icons/md';

const features = [{
        icon: < MdTraffic / > ,
        title: "Adaptive Signals",
        text: "Minimize congestion by applying adaptive traffic signals based on real-time conditions."
    },
    {
        icon: < MdAnalytics / > ,
        title: "AI Predictions",
        text: "Analyze and predict traffic flow using advanced AI and machine learning models."
    },
    {
        icon: < MdNotificationsActive / > ,
        title: "Live Driver Alerts",
        text: "Provide drivers with live alerts, alternate routes, and accurate travel times via a mobile platform."
    },
    {
        icon: < MdAltRoute / > ,
        title: "Enhanced Efficiency",
        text: "Enhance public transport efficiency through intelligent, traffic-aware scheduling."
    }
];

const Features = () => {
    return ( <
        section id = "features"
        className = "features-section" >
        <
        div className = "container" >
        <
        h2 > Core Features < /h2> <
        div className = "features-grid" > {
            features.map((feature, index) => ( <
                div className = "feature-item"
                key = { index } >
                <
                div className = "feature-icon" > { feature.icon } < /div> <
                h3 > { feature.title } < /h3> <
                p > { feature.text } < /p> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /section>
    );
};

export default Features;