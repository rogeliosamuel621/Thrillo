import React, { useState } from 'react';
import '../../styles/containers/addBoard.css';
import { Button, Input } from '../atoms';
import ButtonAddBoard from './ButtonAddBoard';
const AddBoard = () => {
  //   const ref = React.useRef();
  const [fileName, setFileName] = useState('');
  //   function handleFileClear() {
  //     ref.current.value = '';
  //     setFileName('');
  //   }
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
          value={fileName}
          placeHolder={'Add board title'}
          disabled={true}
        />
      </div>
      <div>
        <label className="custom-file-upload">
          <input
            type="file"
            accept=".png,.jpg,.jpeg,.svg"
            // ref={ref}
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
