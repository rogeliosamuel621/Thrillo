import React from 'react';
import '../../styles/containers/column.css';
import { CardTask } from '../atoms';

const Column = ({ title, tasks }) => (
  <div className="column">
    <label>{title}</label>
    <div className="taks">
      {tasks.map((task, index) => (
        <CardTask key={index} task={task} />
      ))}
    </div>
  </div>
);

export default Column;
