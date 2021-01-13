import React, { useState } from 'react';
import '../../styles/pages/board.css';
import { BoardCard, Nav } from '../molecules/';
import { AddBoard } from '../containers';
import { ButtonAddBoard } from '../containers';
import { fakeBoards } from '../../utils/fakeApi';

const Board = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Nav />
      <div className="container">
        <div className="header flex">
          <p>All board</p>
          <ButtonAddBoard handleOnClick={() => setModal(!modal)} />
        </div>
        <div className="container-board">
          {fakeBoards.map((board) => (
            <BoardCard
              img={board.img}
              teamMates={board.teamMates}
              title={board.title}
            />
          ))}
        </div>
      </div>
      {modal && <AddBoard handleCloseModal={() => setModal(!modal)} />}
    </>
  );
};

export default Board;
