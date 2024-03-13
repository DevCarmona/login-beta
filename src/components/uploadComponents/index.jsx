import "./styles.css";

import { useState } from "react";
import { MdCloudUpload, MdDelete, mdDelete} from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

export const UploadComponents = () => {

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("Arquivo não selecionado")

  return (
    <main>
        <form className="upload-form" onClick={() => document.querySelector(".input-field").click()}>
            <input className="input-field" type="file" accept="image/*" hidden 
            onChange={({target: {files}}) => {
                files[0] && setFileName(files[0].name);
                if(files) {
                    setImage(URL.createObjectURL(files[0]));
                }
            }} />
            {image ? 
            <img src={image} width={150} height={150} alt={fileName}/>
            : 
            <>
            <MdCloudUpload color='#1475cf' size={60} />
            <p>Procurar arquivos para upload</p>
            </>
        }        
        </form>
        <section className="upload-row">
            <AiFillFileImage color='#1475cf'/>
            <span className="upload-content">
                {fileName}
                <MdDelete
                onClick={() => {
                    setFileName("Arquivo não selecionado")
                    setImage(null)
                }}
                />
            </span>
        </section>
        
    </main>
  );
};
