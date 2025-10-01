import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { login } from '../api/mockApi';
import './LoginPages.css'; // We'll use a shared CSS file

const PublicLoginPage = ({ onLogin }) => {
        const [username, setUsername] = useState('public'); // Default to 'public' for convenience
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
        const [loading, setLoading] = useState(false);
        const navigate = useNavigate();

        const handlePublicLogin = async(e) => {
            e.preventDefault();
            setLoading(true);
            setError('');
            try {
                // We only try to log in as a public user
                const { user } = await login(username, password);
                if (user.role !== 'PUBLIC') {
                    throw new Error('Access denied. Please use the Government portal.');
                }
                onLogin(user);
                navigate('/public-portal');
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const handleGoogleSignIn = () => {
            alert("Public Google Sign-In is a demo feature.");
        };

        return ( <
            div className = "login-container" >
            <
            form onSubmit = { handlePublicLogin }
            className = "login-form" >
            <
            h2 > Public User Login < /h2> <
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
            placeholder = "Hint: 123"
            required /
            >
            <
            /div> {
                error && < p className = "error-message" > { error } < /p>} <
                    button type = "submit"
                disabled = { loading } > { loading ? 'Logging in...' : 'Login' } <
                    /button> <
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

        export default PublicLoginPage;