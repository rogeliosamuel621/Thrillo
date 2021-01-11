import React, { useState } from 'react';
import '../../styles/containers/addBoard.css';
import { Button, Input } from '../atoms';
import ButtonAddBoard from './ButtonAddBoard';
const AddBoard = () => {
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
    <div className="container-addBoard">
      <div>
        <img src={fileName} />
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
        <Button className="margin bg-white"> cancel </Button>
        <ButtonAddBoard />
      </div>
    </div>
  );
};

export default AddBoard;
