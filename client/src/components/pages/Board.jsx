import React from 'react'
import "../../styles/pages/board.css"
import { Nav,BoardCard } from '../molecules/';
const Board = () => {
    return (
        <>
         <Nav />
        <div className="container">
        <div className="header flex">
            <p>All board</p>
            <button className="button">
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
    )
}

export default Board
