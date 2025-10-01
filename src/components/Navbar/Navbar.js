import React from 'react';
import { Link } from 'react-router-dom'; // <-- 1. Import Link
import './Navbar.css';
import { FaMotorcycle } from 'react-icons/fa';

const Navbar = () => {
    return ( <
        nav className = "navbar" >
        <
        div className = "container navbar-container" >
        <
        Link to = "/"
        className = "navbar-logo" > { /* Changed to Link */ } <
        FaMotorcycle className = "logo-icon" / > JAMFREE <
        /Link> <
        ul className = "nav-menu" >
        <
        li className = "nav-item" > < a href = "/#problem"
        className = "nav-link" > The Problem < /a></li >
        <
        li className = "nav-item" > < a href = "/#solution"
        className = "nav-link" > Our Solution < /a></li >
        <
        li className = "nav-item" > < a href = "/#features"
        className = "nav-link" > Features < /a></li >
        <
        /ul> { /* 2. Changed this button to a Link */ } <
        Link to = "/select-portal"
        className = "btn btn-primary" > Login < /Link> <
        /div> <
        /nav>
    );
};

export default Navbar;