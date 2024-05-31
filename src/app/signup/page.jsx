'use client'
import React, { useState } from 'react';
import '../style.css';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
    const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidEmailOrPhone(emailOrPhone)) {
      alert('Please enter a valid email or phone number.');
    } else if (!isValidName(firstName) || !isValidName(lastName)) {
      alert('Please enter a valid first and last name.');
    } else if (password.length < 8) {
      alert('Password should be at least 8 characters long.');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match.');
    } 
    router.push('/main');
  };

  const isValidEmailOrPhone = (input) => {
    // Implement your own validation logic for email or phone number
    // For simplicity, just checking if the input is not empty
    return input.trim() !== '';
  };

  const isValidName = (name) => {
    // Implement your own validation logic for names
    // For simplicity, just checking if the name is not empty
    return name.trim() !== '';
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            required
          />
        </div>
        <div className="input-name">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Confirm your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn">
          Sign Up
        </button>

        <div className="register-link">
          <p>
            Already have an account?
            <a href="/login"> Log in</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;