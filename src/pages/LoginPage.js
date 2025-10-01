import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'; // Import the Google icon
import { login } from '../api/mockApi';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
        const [loading, setLoading] = useState(false);
        const navigate = useNavigate();

        const handleLogin = async(e) => {
            e.preventDefault();
            setLoading(true);
            setError('');
            try {
                const { user } = await login(username, password);
                onLogin(user);
                if (user.role === 'PUBLIC') {
                    navigate('/public-portal');
                } else if (user.role === 'GOVERNMENT') {
                    navigate('/government-portal');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const handleGoogleSignIn = () => {
            // Note: This is a placeholder. Real Google Sign-In requires
            // Google Cloud Platform setup and additional libraries.
            console.log("Attempting Google Sign-In...");
            alert("Google Sign-In functionality is not implemented in this demo.");
        };

        return ( <
            div className = "login-container" >
            <
            form onSubmit = { handleLogin }
            className = "login-form" >
            <
            h2 > JAMFREE Portal Login < /h2> <
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
            required /
            >
            <
            /div> {
                error && < p className = "error-message" > { error } < /p>} <
                    p className = "login-hint" >
                    Hint: Use `public` / `123`
                or `government` / `456` <
                    /p> <
                    button type = "submit"
                disabled = { loading } > { loading ? 'Logging in...' : 'Login' } <
                    /button>

                { /* New Divider and Google Button */ } <
                div className = "divider" > OR < /div> <
                    button type = "button"
                className = "google-btn"
                onClick = { handleGoogleSignIn } >
                    <
                    FcGoogle className = "google-icon" / >
                    Sign in with Google <
                    /button> <
                    /form> <
                    /div>
            );
        };

        export default LoginPage;