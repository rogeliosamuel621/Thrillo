import React, { Children } from 'react';
import '../../styles/atoms/input.css';

const Input = ({
  classNameContainer,
  setValue,
  value,
  placeHolder,
  type,
  children,
  disabled = false,
}) => {
  return (
    <div className={`EditInputText-Container ${classNameContainer}`}>
      <input
        type={type}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeHolder}
        value={value}
        disabled={disabled}
        required
      />
      {children}
    </div>
  );
};

export default Input;
