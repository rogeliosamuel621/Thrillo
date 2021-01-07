import React from 'react';
import '../../styles/pages/board.css';
import { BoardCard } from '../molecules/';
import AddIcon from '../../assets/img/add.svg';

const Board = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="header flex">
          <p>All board</p>
          <button className="button">
            <img src={AddIcon} alt="add icon" width="15px" height="15px" />
            add
          </button>
        </div>
        <div className="container-board">
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </div>
      </div>
    </>
  );
};

export default Board;
