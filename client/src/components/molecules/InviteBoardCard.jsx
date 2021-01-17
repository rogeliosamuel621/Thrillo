import React from 'react';
import '../../styles/molecules/inviteBoardCard.css';
import { usersInvite } from '../../utils/fakeApi';
import { Button, Input } from '../atoms';
import SearchIcon from '../../assets/img/search.svg';
import CloseIcon from '../../assets/img/close.svg';

const Body = () => {
  const SearchResult = () => {
    const Users = ({ avatar, name }) => (
      <div className="row-search-invite-board">
        <div className="avatar-invite-board">
          <img src={avatar} alt="mate pic" width="30px" height="30px" />
        </div>
        <p>{name}</p>
      </div>
    );
    return (
      <div className="search-invite-board">
        {usersInvite.map((user, index) => (
          <Users key={index} {...user} />
        ))}
      </div>
    );
  };
  return (
    <div className="container-invite-board-body">
      <p>Search users you want to invite to</p>
      <Input type="search" classNameContainer="container-input">
        <span className="button-search">
          <img src={SearchIcon} alt="mate pic" width="20px" height="20px" />
        </span>
      </Input>
      <SearchResult />
      <div className="flex-center">
        <Button>Add</Button>
      </div>
    </div>
  );
};
const InviteBoardCard = ({ handleCloseModal }) => {
  const ButtonClose = () => (
    <div className="butoon-close">
      <img
        onClick={() => handleCloseModal()}
        src={CloseIcon}
        alt="close icon"
        width="40px"
        height="40px"
      />
    </div>
  );
  return (
    <div className="container-invite-board-modal">
      <div className="container-invite-board">
        <ButtonClose />
        <Body />
      </div>
    </div>
  );
};

export default InviteBoardCard;
