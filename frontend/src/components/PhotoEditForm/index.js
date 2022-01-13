import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as imageActions from '../../store/images';
import { useHistory } from "react-router-dom";
import React from 'react';

const PhotoEditForm = ({ singlePhoto }) => {
    const id = parseInt(singlePhoto.id, 10);
    const userId = (parseInt(singlePhoto.userId, 10));
    const [description, setDescription] = useState(singlePhoto.description);
    const [imageUrl, setImageUrl] = useState(singlePhoto.imageUrl);

    const updateDescription = (e) => setDescription(e.target.value);
    const updateImageUrl = (e) => setImageUrl(e.target.value);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit =  async (e) => {
      e.preventDefault();

      const updatedPhoto = {
        id,
        userId,
        imageUrl,
        description
      };

      await dispatch(imageActions.updateImage(updatedPhoto)).then(() => history.push('/photos'))

    };

    return (
      <div className='editBox'>
        <h1>Edit Photo</h1>
        <form onSubmit={handleSubmit}>
          <label> Image URL
          <input
            type='text'
            placeholder={imageUrl}
            value={imageUrl}
            onChange={updateImageUrl}
            name='imageUrl'
          />
          </label>
          <label> Description
          <textarea
            value={description}
            onChange={updateDescription}
            name='description'
            placeholder={description}
            rows='3'
          ></textarea>
          </label> 
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  };

  export default PhotoEditForm;
