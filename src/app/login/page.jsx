'use client'
import React, { useState } from 'react';
import '../style.css';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const router = useRouter;
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidUsernameOrEmail(usernameOrEmail)) {
      alert('Please enter a valid username or email.');
    } else if (password.length < 8) {
      alert('Password should be at least 8 characters long.');
    }
  };

  const isValidUsernameOrEmail = (input) => {
    // Implement your own validation logic for username or email
    // For simplicity, just checking if the input is not empty
    return input.trim() !== '';
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Log in</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username or Email"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
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

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit" className="btn">
          Log in
        </button>

        <div className="register-link">
          <p>
            Dont have an account?
            <a href="/signup"> Sign up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;