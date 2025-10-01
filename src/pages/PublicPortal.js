import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Portals.css';

const PublicPortal = ({ user, onLogout }) => {
    // Center of Chennai, Tamil Nadu
    const position = [13.0827, 80.2707];

    return ( <
        div className = "portal-container" >
        <
        header className = "portal-header" >
        <
        h1 > Public Portal < /h1> <
        div >
        <
        span > Welcome, { user.name } < /span> <
        button onClick = { onLogout }
        className = "logout-btn" > Logout < /button> <
        /div> <
        /header> <
        div className = "portal-content" >
        <
        div className = "route-planner" >
        <
        h3 > Plan Your Route < /h3> <
        input type = "text"
        placeholder = "Enter starting point" / >
        <
        input type = "text"
        placeholder = "Enter destination" / >
        <
        button > Find Best Route < /button> <
        /div> <
        div className = "map-wrapper" >
        <
        MapContainer center = { position }
        zoom = { 13 }
        scrollWheelZoom = { false }
        style = {
            { height: '100%', width: '100%' } } >
        <
        TileLayer attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /
        >
        <
        Marker position = { position } >
        <
        Popup >
        Chennai, Tamil Nadu. < br / > Your current location. <
        /Popup> <
        /Marker> <
        /MapContainer> <
        /div> <
        /div> <
        /div>
    );
};

export default PublicPortal;