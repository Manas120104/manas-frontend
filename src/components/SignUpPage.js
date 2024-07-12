import React, { useState } from 'react';
import './SignUpPage.css';


const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('user'); // Default role

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email && username && password && confirmPassword && mobileNumber && address) {
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return false;
            } else {
                // Example: Trigger OTP generation or form submission
                alert('Generate OTP logic here!');
            }
        } else {
            alert('Please fill in all fields');
        }
    };
    
    const handleGenerateOTP = () => {
        // Example: Navigate to OTP generation page
        window.location.href = '/generate-otp'; // Adjust URL as needed
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <div className="sign-up-page">
           
            <div className="sign-up-container">
                <img src = 'signupimage.png' alt="Sign Up" className="sign-up-image" />
                <h1>Sign Up to Register</h1>
                <form id="signUpForm" onSubmit={handleSubmit} action="/signup" method="POST">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="mobile-number">Mobile Number</label>
                        <input
                            type="text"
                            id="mobile-number"
                            name="mobile-number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="role">Role</label>
                        <select
                            id="role"
                            name="role"
                            value={role}
                            onChange={handleRoleChange}
                            required
                        >
                            <option value="user">User</option>
                            <option value="agent">Agent</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button id="generate-otp-btn" type="submit" onClick={handleGenerateOTP}>Generate OTP!!</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
