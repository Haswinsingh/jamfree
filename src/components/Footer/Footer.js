import React from 'react';
import './Footer.css';
import { FaMotorcycle } from 'react-icons/fa'; // Correct import

const Footer = () => {
    return ( <
        footer className = "footer" >
        <
        div className = "container footer-content" >
        <
        div className = "footer-logo" >
        <
        FaMotorcycle / > JAMFREE <
        /div> <
        p > & copy; 2025 JAMFREE.All Rights Reserved.Creating smarter, responsive urban transport. < /p> <
        /div> <
        /footer>
    );
};

export default Footer;