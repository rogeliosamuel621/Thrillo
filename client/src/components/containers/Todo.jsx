import React from 'react';
import "../../styles/containers/todo.css"
const SectionColumns = () => {
  const CardTask = () => <div className="card-task">task test</div>;
  const Column = () => (
    <div className="column">
      <CardTask />
    </div>
  );
  return (
    <div className="container-columns">
      <Column />
      <Column />
      <Column />
    </div>
  );
};
const SectionAddColumns = () => (
  <div className="container-add-columns">
    <button>Add another list</button>
  </div>
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
