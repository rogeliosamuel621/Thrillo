import React from 'react';
import '../../styles/molecules/boardCard.css';

const BoardCard = ({ img, title, teamMates }) => {
  return (
    <div className="item">
      <img src={img} width="219px" height="103,41px" />
      <p>{title}</p>
      <div className="container-collaborators">
        <div className="avatar-collaborators">RS</div>
        <div className="avatar-collaborators">RS</div>
        <div className="avatar-collaborators">RS</div>
      </div>
    </div>
  );
};

export default BoardCard;
