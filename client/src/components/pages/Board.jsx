import React, { useState } from 'react';
import '../../styles/pages/board.css';
import { BoardCard, Modal, Nav } from '../molecules/';
import AddIcon from '../../assets/img/add.svg';

const Board = () => {
  const [modalActivite, setModalActivite] = useState(false)
  const handleShowModal = () => {
    setModalActivite(true)
  }
  const handleCloseModal = () => {
    setModalActivite(false)
  }
  return (
    <>
      <Nav />
      <div className="container">
        <div className="header flex">
          <p>All board</p>
          <button className="button" onClick={handleShowModal}>
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
      { modalActivite && <Modal handleCloseModal={handleCloseModal} />}
    </>
  );
};

export default Board;
