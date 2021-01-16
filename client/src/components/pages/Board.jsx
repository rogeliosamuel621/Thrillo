import React from 'react';
import { Nav } from '../molecules';
import PointIcon from '../../assets/img/point.svg';
import { collaborators } from '../../utils/fakeApi';
import { Todo } from '../containers';

const Header = () => {
  const Collaborators = () => (
    <div className="collaborators">
      {collaborators.map((mate, index) => (
        <img key={index} src={mate} alt="mate pic" width="30px" height="30px" />
      ))}
    </div>
  );
  const Point = () => (
    <img src={PointIcon} alt="add icon" width="15px" height="15px" />
  );
  const ThreePointsIcon = () => (
    <div className="point-container">
      <Point />
      <Point />
      <Point />
    </div>
  );
  const ButtonShowMenu = () => (
    <button>
      <ThreePointsIcon />
      show menu
    </button>
  );
  return (
    <div className="header-board">
      <Collaborators />
      <ButtonShowMenu />
    </div>
  );
};
const Board = React.memo(() => {
  return (
    <>
      <Nav />
      <Header />
      <Todo />
    </>
  );
});

export default Board;
