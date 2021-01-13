import React from 'react';
import '../../styles/atoms/button.css';
const Button = ({ className, handleOnClick, children }) => {
  const handleMessage = () => {
    console.log(
      'This message seems to you when the button component does not send a click event',
      { handleOnClick }
    );
  };
  const validateHandleOnClick = () => {
    if (!handleOnClick) {
      return handleMessage();
    }
    return handleOnClick();
  };

  return (
    <button className={`button ${className}`} onClick={validateHandleOnClick}>
      {children}
    </button>
  );
};

export default Button;
