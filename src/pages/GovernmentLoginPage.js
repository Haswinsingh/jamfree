import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { login } from '../api/mockApi';
import './LoginPages.css'; // It uses the same styles

const GovernmentLoginPage = ({ onLogin }) => {
        const [username, setUsername] = useState('government'); // Default to 'government'
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
        const [loading, setLoading] = useState(false);
        const navigate = useNavigate();

        const handleGovernmentLogin = async(e) => {
            e.preventDefault();
            setLoading(true);
            setError('');
            try {
                // We only try to log in as a government user
                const { user } = await login(username, password);
                if (user.role !== 'GOVERNMENT') {
                    throw new Error('Access denied. Please use the Public portal.');
                }
                onLogin(user);
                navigate('/government-portal');
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const handleGoogleSignIn = () => {
            alert("Government Google Sign-In is a demo feature.");
        };

        return ( <
            div className = "login-container" >
            <
            form onSubmit = { handleGovernmentLogin }
            className = "login-form" >
            <
            h2 > Government Official Login < /h2> <
            div className = "form-group" >
            <
            label htmlFor = "username" > Username < /label> <
            input type = "text"
            id = "username"
            value = { username }
            onChange = {
                (e) => setUsername(e.target.value) }
            required /
            >
            <
            /div> <
            div className = "form-group" >
            <
            label htmlFor = "password" > Password < /label> <
            input type = "password"
            id = "password"
            value = { password }
            onChange = {
                (e) => setPassword(e.target.value) }
            placeholder = "Hint: 456"
            required /
            >
            <
            /div> {
                error && < p className = "error-message" > { error } < /p>} <
                    button type = "submit"
                disabled = { loading } > { loading ? 'Access Portal' : 'Access Portal' } <
                    /button> <
                    div className = "divider" > OR < /div> <
                    button type = "button"
                className = "google-btn"
                onClick = { handleGoogleSignIn } >
                    <
                    FcGoogle className = "google-icon" / >
                    Sign in with official Google account <
                    /button> <
                    /form> <
                    /div>
            );
        };

        export default GovernmentLoginPage;