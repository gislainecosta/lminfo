import React, { useState, useCallback } from 'react';
import Slider from '@material-ui/core/Slider';
import Cropper from 'react-easy-crop';

import Img from '../../assets/images/logo-editado.png'
import './styles.css'

import Button from '@material-ui/core/Button'
import getCroppedImg from './cropImage'
import { styles } from './styles'

const Crop = (props) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState()

    const onCropComplete = useCallback((croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])
    
    const showCroppedImage = useCallback(async () => {
        try {
            const cropped = await getCroppedImg(
                props.image,
                croppedAreaPixels,
            )
            console.log('donee', { croppedImage })
            setCroppedImage(cropped)
            console.log(croppedImage)
        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels, props.image, croppedImage])

    console.log(croppedImage)
    return (
        <div className="App">
            <div className="crop-container">
                <Cropper
                    image={props.image}
                    crop={crop}
                    zoom={zoom}
                    aspect={1 / 1}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                />
            </div>
            <div className="controls">
                <Slider
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    aria-labelledby="Zoom"
                    onChange={(e, zoom) => setZoom(zoom)}
                    classes={{ container: 'slider' }}
                />

                <Button
                    onClick={showCroppedImage}
                    variant="contained"
                    color="primary"
                >
                    Cortar Foto
                </Button>
            </div>
        </div>
    )
}

export default Crop;
