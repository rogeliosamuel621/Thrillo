import React, { useState } from 'react';
import '../../styles/containers/addBoard.css';
import { Button, Input } from '../atoms';
import ButtonAddBoard from './ButtonAddBoard';
const AddBoard = () => {
  const [fileName, setFileName] = useState('');
  const [title, setTitle] = useState('');

  function handleFileSelected(e) {
    const files = Array.from(e.target.files);
    console.log(files);
    setFileName(files[0].name);
  }
  return (
    <div className="container-addBoard">
      <div>
        <img href="#" className="img-board" />
      </div>
      <div>
        <Input
          value={title}
          placeHolder={'Add board title'}
          setValue={setTitle}
          type="text"
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
