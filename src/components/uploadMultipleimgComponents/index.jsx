import './styles.css'
import { useState } from 'react';
import axios from "axios";

export const UploadMultipleImgComponents = () => {
    const [file, setFile] = useState(null);

    function handleUpload() {
        if(!file) {
            console.log("Arquivo não selecionado");
            return;
        }

        const fd = new FormData();
        fd.append('file', file);


    }

  return (
    <>
    <input type="file" multiple onChange={(e) => {setFile(e.target.files[0])}} />
    <button onClick={handleUpload}>Upload</button>
    </>
  );
};