import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/containers/registerForm.css';

import { Input } from '../atoms/';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="RegisterForm-container">
      <div className="RegisterForm">
        <div className="RegisterForm-header">
          <h1>Login</h1>
        </div>
        <form className="RegisterForm-form">
          <div className="RegisterForm-form-inputContainer">
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
            <input type="submit" value="Login" />
          </div>
        </form>
        <div className="RegisterForm-footer">
          <p>
            Don't you have an account? <Link to="/register">register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
