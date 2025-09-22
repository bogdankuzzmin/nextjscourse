'use client';

import { useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import classes from './imagePicker.module.css';

interface ImagePickerProps {
  label?: string;
  name?: string;
}

const ImagePicker = ({ label, name }: ImagePickerProps) => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    imageInputRef.current?.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPickedImage(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image src={pickedImage} alt="The image selected by the user."  fill/>
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>

        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />

        <button className={classes.button} type="button" onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;