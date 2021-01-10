import React, { useState } from 'react';
import '../../styles/pages/board.css';
import { BoardCard, Modal, Nav } from '../molecules/';
import { AddBoard } from '../containers';
import { ButtonAddBoard } from '../containers';

const Board = () => {
  const [modal, setModal] = useState(false);
  const handleShowModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  return (
    <>
      <Nav />
      <div className="container">
        <div className="header flex">
          <p>All board</p>
          <ButtonAddBoard handleOnClick={handleShowModal} />
        </div>
        <div className="container-board">
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </div>
      </div>
      {modal && (
        <Modal handleCloseModal={handleCloseModal}>
          <AddBoard />
        </Modal>
      )}
    </>
  );
};

export default Board;
