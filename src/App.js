import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import PublicLoginPage from './pages/PublicLoginPage';
import GovernmentLoginPage from './pages/GovernmentLoginPage';
import PublicPortal from './pages/PublicPortal';
import GovernmentPortal from './pages/GovernmentPortal';
import PortalSelectionPage from './pages/PortalSelectionPage'; // <-- 1. Import the new page

function App() {
    const [user, setUser] = useState(null);

    const handleLogin = (loggedInUser) => {
        setUser(loggedInUser);
    };

    const handleLogout = () => {
        setUser(null);
    };

    return ( <
            Router >
            <
            Routes >
            <
            Route path = "/"
            element = { < HomePage / > }
            />

            { /* 2. Add the new route for the selection page */ } <
            Route path = "/select-portal"
            element = { < PortalSelectionPage / > }
            />

            <
            Route path = "/login-public"
            element = { < PublicLoginPage onLogin = { handleLogin }
                />} / >
                <
                Route path = "/login-government"
                element = { < GovernmentLoginPage onLogin = { handleLogin }
                    />} / >

                    { /* Protected Routes */ } <
                    Route
                    path = "/public-portal"
                    element = {
                        user && user.role === 'PUBLIC' ? < PublicPortal user = { user }
                        onLogout = { handleLogout }
                        /> : <Navigate to="/login - public " />} /
                        >
                        <
                        Route
                        path = "/government-portal"
                        element = {
                            user && user.role === 'GOVERNMENT' ? < GovernmentPortal user = { user }
                            onLogout = { handleLogout }
                            /> : <Navigate to="/login - government " />} /
                            >

                            <
                            Route path = "*"
                            element = { < Navigate to = "/" / > }
                            /> <
                            /Routes> <
                            /Router>
                        );
                    }

                    export default App;