'use client';
import classes from './image-picker.module.css'
import {useRef, useState} from "react";
import Image from "next/image";


export default function ImagePicker({label, name}) {
    const imageInput = useRef();
    const [pickedImage, setPickedImage] = useState(null);

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) {
            setPickedImage(null)
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);

    }

    function handlePickClick() {
        imageInput.current.click();
    }

    return <>
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image selected</p>}
                    {pickedImage && <Image src={pickedImage} alt={label} fill/>}
                </div>
                <input required onChange={handleImageChange} ref={imageInput} className={classes.input} type="file"
                       id={name}
                       name={name}
                       accept="image/png, image/jpeg"/>
                <button className={classes.button} type="button" onClick={handlePickClick}>Pick an image</button>
            </div>
        </div>
    </>
}