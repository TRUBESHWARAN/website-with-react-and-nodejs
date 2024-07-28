import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'; // Import the CSS file for styling

const Login = ({ setUser }) => {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, { username, password });

      setUser({ id: response.data.userId, username });

      navigate('/chat'); // Redirect to the chat list after successful login
    } catch (error) {
      alert('Login failed');
    }
  };

    return (

        <div className="login-container">

            <form onsubmit={handleSubmit} className="login-form">

                <h2 className="title">Login</h2>

                <div className="form-group">

                    <input type="text"

                        placeholder="username"

                        value = {username}

                        onChange={(e) => setUsername(e.target.value)} required />
                </div>

                <div className="form-group">

                    <input type="password"

                        placeholder="Password"

                        value={password}

                        onChange={(e) => setPassword(e.target.value)} required />

                </div> 
                <button type="submit" onClick= {handleLogout} className="login-button">login</button>

            </form>

        </div>
    );
};

export default Login;