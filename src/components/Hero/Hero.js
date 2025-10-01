import React from 'react';
import './Hero.css';
// You can download a high-quality background image and place it in src/assets
// import heroBg from '../../assets/hero-background.jpg'; 

const Hero = () => {
    // Style for background image
    // const heroStyle = {
    //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBg})`
    // };

    return ( <
        section id = "home"
        className = "hero" /*style={heroStyle}*/ >
        <
        div className = "container hero-content" >
        <
        h1 > Creating Jam - Free, Unforgettable Journeys. < /h1> <
        p className = "hero-subtitle" >
        Using AI and real - time data to build the smart, adaptive, and integrated traffic management solution of tomorrow. <
        /p> <
        div className = "hero-buttons" >
        <
        a href = "#solution"
        className = "btn btn-primary" > Discover Solution < /a> <
        a href = "#login"
        className = "btn btn-secondary" > Access Portal < /a> <
        /div> <
        /div> <
        /section>
    );
};

export default Hero;