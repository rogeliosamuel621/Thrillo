import React, { Children } from 'react';
import '../../styles/molecules/modal.css';
import CloseIcon from '../../assets/img/close.svg';
import PropTypes from 'prop-types';

const Modal = ({ handleCloseModal, children }) => {
  return (
    <div className="modal">
      <div className="container-modal">
        <div className="butoon-close">
          <img
            onClick={() => handleCloseModal()}
            src={CloseIcon}
            alt="close icon"
            width="45px"
            height="45px"
          />
        </div>
        {children}
      </div>
    </div>
  );
};
Modal.propTypes = {
  handleCloseModal: PropTypes.element.isRequired,
};
export default Modal;
