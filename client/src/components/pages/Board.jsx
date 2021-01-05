import React from 'react'
import "../../styles/pages/board.css"
import { Nav } from '../molecules/';
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
            <div className="item">
                <img href="#" className="img-board" />
                <p>Dev challenge</p>
                <div className="container-collaborators">
                    <div className="avatar-collaborators">RS</div>
                    <div className="avatar-collaborators">RS</div>
                    <div className="avatar-collaborators">RS</div>
                    <p>+ 5 others</p>
                </div>
            </div>
            <div className="item">
                <img href="#" className="img-board" />
                <p>Dev challenge</p>
                <div className="container-collaborators">
                    <div className="avatar-collaborators">RS</div>
                    <div className="avatar-collaborators">RS</div>
                    <div className="avatar-collaborators">RS</div>
                    <p>+ 5 others</p>
                </div>
            </div>
            <div className="item">
                <img href="#" className="img-board" />
                <p>Dev challenge</p>
                <div className="container-collaborators">
                    <div className="avatar-collaborators">RS</div>
                    <div className="avatar-collaborators">RS</div>
                    <div className="avatar-collaborators">RS</div>
                    <p>+ 5 others</p>
                </div>
            </div>
            <div className="item">
                <img href="#" className="img-board" />
                <p>Dev challenge</p>
                <div className="container-collaborators">
                    <div className="avatar-collaborators">RS</div>
                    <div className="avatar-collaborators">RS</div>
                    <div className="avatar-collaborators">RS</div>
                    <p>+ 5 others</p>
                </div>
            </div>

        </div>
    </div>
    </>
    )
}

export default Board
