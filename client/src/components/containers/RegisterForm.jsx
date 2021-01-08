import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/containers/registerForm.css';

import { Input } from '../atoms/';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="RegisterForm-container">
      <div className="RegisterForm">
        <div className="RegisterForm-header">
          <h1>Create an account</h1>
        </div>
        <form className="RegisterForm-form">
          <div className="RegisterForm-form-inputContainer">
            <Input
              placeHolder="Username"
              setValue={setUsername}
              type="text"
              value={username}
            />
            <Input
              placeHolder="Email"
              setValue={setEmail}
              type="email"
              value={email}
            />
            <Input
              placeHolder="Password"
              setValue={setPassword}
              type="password"
              value={password}
            />
          </div>
          <div className="RegisterForm-form-submit">
            <input type="submit" value="Register" />
          </div>
        </form>
        <div className="RegisterForm-footer">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
