import React, { useState } from 'react';
import { InviteBoardCard, Nav } from '../molecules';
import PointIcon from '../../assets/img/point.svg';
import AddIcon from '../../assets/img/add.svg';
import { collaborators } from '../../utils/fakeApi';
import { Todo } from '../containers';
import '../../styles/pages/board.css';
import { Button } from '../atoms';
const Header = () => {
  const [modal, setModal] = useState(false);
  const Collaborators = () => (
    <div className="collaborators">
      {collaborators.map((mate, index) => (
        <div className="avatar" key={index}>
          <img src={mate} alt="mate pic" width="30px" height="30px" />
        </div>
      ))}
      <div className="button-add-collaboarators" onClick={() => setModal(!modal)}>
        <img src={AddIcon} alt="add icon" width="18px" height="18px" />
      </div>
    </div>
  );
  const Point = () => (
    <img src={PointIcon} alt="add icon" width="10px" height="10px" />
  );
  const ThreePointsIcon = () => (
    <div className="point-container">
      <Point />
      <Point />
      <Point />
    </div>
  );
  const ButtonShowMenu = () => (
    <Button className="show-menu" >
      <ThreePointsIcon />
      show menu
    </Button>
  );
  return (
    <div className="container-header-board">
      <div className="header-board">
        <Collaborators />
        <ButtonShowMenu />
      </div>
      {modal && <InviteBoardCard handleCloseModal={() => setModal(!modal)} />}
    </div>
  );
};
const Board = React.memo(() => {
  return (
    <>
      <Nav />
      <div className="container-board">
        <Header />
        <Todo />
      </div>
    </>
  );
});

export default Board;
