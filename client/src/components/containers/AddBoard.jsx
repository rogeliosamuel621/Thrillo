import React, { useState } from 'react';
import '../../styles/containers/addBoard.css';
import { Input } from '../atoms';
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
      <div className="row">
        <img href="#" className="img-board" />
      </div>
      <div className="row">
        <Input
          value={fileName}
          placeHolder={'Add board title'}
          disabled={true}
        />
      </div>
      <div className="row">
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
      <div className="row">
        <button>cancel</button>
        <button>add</button>
      </div>
    </div>
  );
};

export default AddBoard;
