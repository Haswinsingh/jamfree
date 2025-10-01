import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Login from '../components/Login/Login'; // The component with the two cards
import Footer from '../components/Footer/Footer';
import './PortalSelectionPage.css';

const PortalSelectionPage = () => {
    return ( <
        div className = "portal-selection-page" >
        <
        Navbar / >
        <
        main className = "selection-content" >
        <
        Login / >
        <
        /main> <
        Footer / >
        <
        /div>
    );
};

export default PortalSelectionPage;