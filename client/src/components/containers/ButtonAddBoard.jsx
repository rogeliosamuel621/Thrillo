import React from 'react';
import AddIcon from '../../assets/img/add.svg';
import Button from '../atoms/Button';
const ButtonAddBoard = ({ handleOnClick }) => {
  return (
    <Button className="bg-primary color-white" handleOnClick={handleOnClick}>
      <img src={AddIcon} alt="add icon" width="15px" height="15px" />
      Add
    </Button>
  );
};

export default ButtonAddBoard;
