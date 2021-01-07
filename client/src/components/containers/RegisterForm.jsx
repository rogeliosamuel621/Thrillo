import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/containers/registerForm.css';

import { Input } from '../atoms/';

const RegisterForm = () => {
  return (
    <div className="RegisterForm-container">
      <div className="RegisterForm">
        <div className="RegisterForm-header">
          <h1>Create an account</h1>
        </div>
        <form className="RegisterForm-form">
          <div className="RegisterForm-form-inputContainer">
            <Input
              placeHolder="Email"
              setValue={(e) => console.log(e)}
              type="email"
              value={(e) => console.log(e)}
            />
            <Input
              placeHolder="Password"
              setValue={(e) => console.log(e)}
              type="password"
              value={(e) => console.log(e)}
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
