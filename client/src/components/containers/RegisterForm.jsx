import React from 'react';
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
          <div className="RegisterForm-form-submit">
            <input type="submit" value="Register" />
          </div>
        </form>
        <div className="RegisterForm-footer">
          <p>
            Already have an account? <strong>Login</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
