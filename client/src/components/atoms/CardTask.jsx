import React from 'react';
import '../../styles/atoms/cardTask.css';

const CardTask = ({ task }) => {
  return (
    <div className="CardTask">
      <p>{task}</p>
    </div>
  );
};

export default CardTask;
