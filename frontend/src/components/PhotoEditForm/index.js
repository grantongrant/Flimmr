import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as imageActions from '../../store/images';
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import React from 'react';

const PhotoEditForm = ({ singlePhoto }) => {
    const [userId, setUserId] = useState(singlePhoto.userId);
    const [description, setDescription] = useState(singlePhoto.description);
    const [imageUrl, setImageUrl] = useState(singlePhoto.imageUrl);

    const updateUserId = (e) => setUserId(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateImageUrl = (e) => setImageUrl(e.target.value);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit =  async (e) => {
      e.preventDefault();

      const updatedPhoto = {
        userId,
        imageUrl,
        description
      };

      await dispatch(imageActions.updateImage(updatedPhoto)).then(history.push(`/photos/${singlePhoto.id}`))
    };

//     useEffect(() => {
//       dispatch(imageActions.getAllImages());
//   }, [handleSubmit, dispatch]);

    return (
      <div className='editBox'>
        <h1>Edit Photo</h1>
        <form onSubmit={handleSubmit}>
          {/* <input
            type='number'
            placeholder={userId}
            value={userId}
            onChange={updateUserId}
            name='userId'
          /> */}

          <input
            type='text'
            placeholder={imageUrl}
            value={imageUrl}
            onChange={updateImageUrl}
            name='imageUrl'
          />

          <textarea
            value={description}
            onChange={updateDescription}
            name='description'
            placeholder={description}
            rows='3'
          ></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  };

  export default PhotoEditForm;
