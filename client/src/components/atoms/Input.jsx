import React from 'react';
import '../../styles/atoms/input.css';

const Input = ({ setValue, value, placeHolder, type }) => {
  return (
    <div className="EditInputText-Container">
      <input
        type={type}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeHolder}
        value={value}
        required
      />
    </div>
  );
};

export default Input;
