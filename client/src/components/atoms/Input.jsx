import React from 'react';
import '../../styles/atoms/input.css';

const Input = ({ setValue, value, placeHolder, type, disabled = false }) => {
  return (
    <div className="EditInputText-Container">
      <input
        type={type}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeHolder}
        value={value}
        disabled={disabled}
        required
      />
    </div>
  );
};

export default Input;
