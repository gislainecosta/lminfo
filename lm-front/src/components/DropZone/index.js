import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

import Crop from '../../components/Crop/'

import {
    Container,
} from './styles';

const baseStyle = {
    flex: 1,
    display: 'flex',
    marginBottom: '2%',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#00a2ff',
    borderStyle: 'dashed',
    color: '#00d8ff',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

const DropZone = (props) => {
    const [image, setImage] = useState([])
    const [viewCrop, setViewCrop] = useState(false)

    useEffect(() =>{
        if (image.length !== 0){
            setViewCrop(true)
        }
    }, [image])
    
    const onDrop = useCallback((acceptedFiles) => {
        let files = acceptedFiles;
        
        for (var i = 0; i < files.length; i++) {
            let file = files[i];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImage(reader.result);
            } 
        }
    }, [])

    const {
        getRootProps,
        getInputProps,
        acceptedFiles,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({ onDrop, accept: 'image/*' });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    const files = acceptedFiles.map(file => (
        <span key={file.path}>
            {file.path}
        </span>
        
    ));

    return (
        <Container>
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <p>Arraste e solte sua Foto aqui ou clique para selecionar o arquivo</p>
            </div>
            <aside>
                <p><b>Foto: </b>{files}</p>
            </aside>
            
            {
                viewCrop ? <Crop image={image} /> : <div></div>
            } 
        </Container>
    );
}

export default DropZone;