import React from 'react';
import './Problem.css';
import { FaCarCrash, FaSmog, FaClock } from 'react-icons/fa';

const problems = [{
        icon: < FaClock / > ,
        title: "Congestion & Delays",
        description: "Increasing urban traffic leads to massive congestion, fuel wastage, and lost time."
    },
    {
        icon: < FaSmog / > ,
        title: "Pollution & Inefficiency",
        description: "Traditional traffic signals use fixed timers and cannot adapt to real-time traffic conditions."
    },
    {
        icon: < FaCarCrash / > ,
        title: "Lack of Integration",
        description: "Poor integration between satellite data, live maps, and on-ground monitoring reduces efficiency."
    }
];

const Problem = () => {
    return ( <
        section id = "problem"
        className = "problem-section" >
        <
        div className = "container" >
        <
        h2 > The Problem We 're Solving</h2> <
        div className = "problem-grid" > {
            problems.map((problem, index) => ( <
                div className = "problem-card"
                key = { index } >
                <
                div className = "problem-icon" > { problem.icon } < /div> <
                h3 > { problem.title } < /h3> <
                p > { problem.description } < /p> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /section>
    );
};

export default Problem;