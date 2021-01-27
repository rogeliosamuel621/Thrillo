import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../styles/containers/registerForm.css';
import AxiosInstance from '../../utils/axios';

import { Input } from '../atoms/';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function register(e) {
    e.preventDefault();

    if (password.length < 6) {
      alert('Password must have at least 6 characters');
      return;
    }

    const data = { username, email, password };

    AxiosInstance.post('/users/register', data)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);
          history.push('/boards');
        }
      })
      .catch((err) => {
        if (err.message === 'Request failed with status code 400') {
          alert('That email is already taken');
          return;
        }
        alert('something wrong occurred');
      });
  }

  return (
    <div className="RegisterForm-container">
      <div className="RegisterForm">
        <div className="RegisterForm-header">
          <h1>Create an account</h1>
        </div>
        <form className="RegisterForm-form" onSubmit={register}>
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
