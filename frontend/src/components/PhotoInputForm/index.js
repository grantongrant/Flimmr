import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useHistory, NavLink } from "react-router-dom";
import * as imageActions from "../../store/images";

import "../../../src/index.css";

const PhotoInputForm = () => {

  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;
  console.log(userId);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [errors, setErrors] = useState([]);


  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const newPhoto = {
      userId,
      imageUrl,
      description
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

  return (
    <div className="upload-page">
    <div className='upload-container'>
      <form onSubmit={handleSubmit}>
      <div className="flimmr-signup-logo"><img src={"https://res.cloudinary.com/ddxtopm0l/image/upload/v1641936934/Flimmr/Flimmr-icon_krefkq.png"} alt="signup background"/></div>
        <h1>Upload Photo</h1>
        <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        {/* <input
          type='number'
          onChange={(e) => setUserId(parseInt(e.target.value, 10))}
          value={userId}
          placeholder='userId'
          name='userId'
        /> */}

        <input
          type='file'
          accept='.png,.jpg,.jpeg'
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          // value={imageUrl}
          // placeholder='Image URL'
          // name='imageUrl'
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name='description'
          placeholder='Add a description'
          rows='3'
        ></textarea>
        <button id="upload-submit-button" type='submit'>Submit</button>
        <p className="login-signup-link">Not Ready?
      <NavLink id="login-signup-link-link"to="/photos"> Back to Photostream.</NavLink></p>
      </form>
    </div>
    </div>
  );
};
export default PhotoInputForm
;
