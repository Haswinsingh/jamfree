import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { FaUserShield, FaUserFriends } from 'react-icons/fa';

const Login = () => {
    return ( <
        section id = "login"
        className = "login-section" >
        <
        div className = "container" >
        <
        h2 > Access Your Portal < /h2> <
        div className = "login-grid" > { /* Official Login Card */ } <
        div className = "login-card" >
        <
        FaUserShield className = "login-icon" / >
        <
        h3 > Official Login < /h3> <
        p > For traffic management authorities to monitor and control the system in real - time. < /p> { /* This now links to the government login page */ } <
        Link to = "/login-government"
        className = "btn btn-primary" > Authority Access < /Link> <
        /div> { /* Public Login Card */ } <
        div className = "login-card" >
        <
        FaUserFriends className = "login-icon" / >
        <
        h3 > Public Login < /h3> <
        p > For drivers and commuters to get timely traffic updates, alerts, and optimized routes. < /p> { /* This now links to the public login page */ } <
        Link to = "/login-public"
        className = "btn btn-secondary" > Commuter Access < /Link> <
        /div> <
        /div> <
        /div> <
        /section>
    );
};

export default Login;