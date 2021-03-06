import React from 'react';
import '../../styles/containers/todo.css';
import { board } from '../../utils/fakeApi';
import { Button } from '../atoms';
import { Column } from './';
import AddBlueIcon from '../../assets/img/addBlue.svg';

const SectionColumns = () => {
  return (
    <div className="container-columns">
      {board.map((column, index) => (
        <Column key={index} {...column} />
      ))}
    </div>
  );
};
const SectionAddColumns = () => (
  <>
    <Button className="button-add-list">
      Add another list
      <img src={AddBlueIcon} alt="close icon" width="15px" height="15px" />
    </Button>
  </>
);

const Todo = () => {
  return (
    <div className="container-todo">
      <SectionColumns />
      <SectionAddColumns />
    </div>
  );
};

export default Todo;
