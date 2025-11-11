import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const { user, updateUser, logout } = useAuth();
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser({ email, password });
    alert('Account updated!');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Account Information</h2>
        <p className="info">Username: {user.username}</p>
        <form onSubmit={handleUpdate} className="form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />
          <button type="submit" className="button">Update</button>
        </form>
        <button onClick={handleLogout} className="button logout">Logout</button>
      </div>
    </div>
  );
};

export default Account;