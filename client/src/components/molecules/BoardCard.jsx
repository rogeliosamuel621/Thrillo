import React from 'react';
import '../../styles/molecules/boardCard.css';

const BoardCard = () => {
  return (
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
  );
};

export default BoardCard;
