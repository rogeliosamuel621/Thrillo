import React from 'react';
import '../../styles/molecules/boardCard.css';

const BoardCard = ({ img, title, teamMates }) => {
  return (
    <div className="item">
      <img src={img} width="219px" height="103,41px" />
      <p>{title}</p>
      <div className="container-collaborators">
        {teamMates.map((mate, index) => (
          <div className="avatar-collaborators" key={index}>
            <img src={mate} alt="mate pic" width="30px" height="30px" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardCard;
