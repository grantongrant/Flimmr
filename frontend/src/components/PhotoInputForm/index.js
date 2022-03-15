import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory, NavLink } from "react-router-dom";
import * as imageActions from "../../store/images";
import { csrfFetch } from "../../store/csrf";
import {AiOutlineCheckCircle} from 'react-icons/ai';
import { getAllImages } from '../../store/images';


import "../../../src/index.css";

const PhotoInputForm = () => {

  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;
  const imagesObject = useSelector((state) => state.image)
  const images = Object.values(imagesObject);
  const sessionImages = images.filter((image) => image.userId === sessionUser.id)
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState([]);
  const numOfPhotos = sessionImages.length;
  console.log(image)

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);


    const newPhoto = {
      userId,
      image,
    };

    // await dispatch(imageActions.createImage(newPhoto)).then(() => history.push("/photos"));
    await dispatch(imageActions.createImage(newPhoto))
      .then(() => {
      alert("Successfully added!")
      history.push("/photos")
    })
    .catch (async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors)
    })
};

  const selectedFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  }

  return (
    <div className="upload-page">
    <div className='upload-container'>
      <form onSubmit={handleSubmit}>
      {/* <div className="flimmr-signup-logo"><img src={"https://res.cloudinary.com/ddxtopm0l/image/upload/v1641936934/Flimmr/Flimmr-icon_krefkq.png"} alt="signup background"/></div> */}
        <p className="upload-text">You can upload {16 - numOfPhotos} more photos.</p>
        <div className="upload-verification">{image ? <AiOutlineCheckCircle/>: null}</div>
        <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        {image ? 
        <div className="upload-image-name">{image.name}</div> :
        <label id="label-for-upload">
        <input
          type='file'
          accept='image/*'
          onChange={selectedFile}
          id="upload-button"
        />
        <span>Choose photo to upload</span>
        </label> }
        <button id="upload-submit-button" type='submit'>Submit</button>
        <p className="upload-link">Not Ready?
      <NavLink className="upload-link"to="/photos"> Back to Photostream.</NavLink></p>
      </form>
    </div>
    </div>
  );
};
export default PhotoInputForm
;
