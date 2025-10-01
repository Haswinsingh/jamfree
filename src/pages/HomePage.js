import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Problem from '../components/Problem/Problem';
import Solution from '../components/Solution/Solution';
import Features from '../components/Features/Features';
// import Login from '../components/Login/Login'; // <-- 1. You can delete this import
import Footer from '../components/Footer/Footer';

const HomePage = () => {
    return ( <
        >
        <
        Navbar / >
        <
        main >
        <
        Hero / >
        <
        Problem / >
        <
        Solution / >
        <
        Features / > { /* 2. The <Login /> component has been removed from here */ } <
        /main> <
        Footer / >
        <
        />
    );
};

export default HomePage;