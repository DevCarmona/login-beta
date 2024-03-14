// https://www.youtube.com/watch?v=b-9Hw03yzTs

import "./styles.css";
import React,{ useState, useRef } from "react";

export const UploadMultipleComponent = () => {
    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    function selectFiles() {
        fileInputRef.current.click();
    }

    function onFileSelect(e) {
        const files = e.target.files;

        if(files.length === 0 ) return;
        for (let i = 0; i < files.length; i++) {
            if(files[i].type.split('/')[0] !== 'image') continue;
            if(!images.some((e) => e.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    },
                ]);
            }
        }
    }
    //  Regra para deletar imagem
    function deleteImage(index) {
        setImages((prevImages) => 
            prevImages.filter((_, i) => i !== index)
        );
    }

    function onDragOver(e) {
        e.preventDefault();
        setIsDragging(true);
        e.dataTransfer.dropEffect = "copy";
    }

    function onDragLeave(e) {
        e.preventDefault();
        setIsDragging(false);
    }

    function onDrop(e) {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        for (let i = 0; i < files.length; i++) {
            if(files[i].type.split('/')[0] !== 'image') continue;
            if(!images.some((e) => e.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    },
                ]);
            }
        }
    }

    function uploadImages() {
        console.log('images: ', images);
    }

    return (
        <div className="card">
            <div className="top">
                <p>inserir imagem</p>
            </div>

            <div className="drag-area" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
                {isDragging ? (
                    <span className="select">coloque suas imagens aqui</span>
                ) : (
                    <>
                        Arraste e solte sua imagem aqui ou {" "}
                    <span className="select" role="button" onClick={selectFiles}>
                        Navegue
                    </span>
                    </>
                )}

                <input name="file" className="file" type="file" multiple ref={fileInputRef} onChange={onFileSelect}></input>
            </div>

            <div className="container">
                {images.map((images, index) => (
                    <div className="image" key={index}>
                        <span className="delete" onClick={() => deleteImage(index)}>&times;</span>
                        <img src={images.url} alt={images.name} />
                    </div>
                ))}

            </div>

            <button type="button" onClick={uploadImages}>Upload</button>
        </div>
    )
}