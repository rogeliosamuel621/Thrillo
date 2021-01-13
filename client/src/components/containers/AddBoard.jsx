import React, { useState } from 'react';
import '../../styles/containers/addBoard.css';
import ButtonAddBoard from './ButtonAddBoard';
import CloseIcon from '../../assets/img/close.svg';

const AddBoard = ({ handleCloseModal }) => {
  const [fileName, setFileName] = useState('');
  const [title, setTitle] = useState('');

  function handleFileSelected(e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      setFileName(reader.result);
    };
  }
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
        <div className="container-addBoard">
          <div className="container-addBoard-img">
            <img
              src={fileName ? fileName : null}
              width="101%"
              height="103.41px"
            />
          </div>
          <div className="container-addBoard-title">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add board title"
            />
          </div>
          <div>
            <label className="custom-file-upload">
              <input
                type="file"
                accept=".png,.jpg,.jpeg,.svg"
                onChange={handleFileSelected}
              />
              Cover image
            </label>
          </div>
          <div className="flex-row flex-end">
            <ButtonAddBoard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBoard;
