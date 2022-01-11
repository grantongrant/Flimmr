import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as imageActions from '../../store/images';

const PhotoEditForm = ({ image }) => {
    const [userId, setUserId] = useState(image.userId);
    const [description, setDescription] = useState(image.description);
    const [imageUrl, setImageUrl] = useState(image.imageUrl);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();

      const newPhoto = {
        userId,
        imageUrl,
        description
      };

      dispatch(imageActions.createImage(newPhoto));
      reset();
      return <Redirect to="/photos" />;
    };

    const reset = () => {
      setUserId(0);
      setImageUrl('');
      setDescription('');
    };

    useEffect(() => {
      dispatch(getAllImages());
  }, [handleSubmit, dispatch]);

    return (
      <div className='inputBox'>
        <h1>Upload Photo</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='number'
            onChange={(e) => setUserId(parseInt(e.target.value, 10))}
            value={userId}
            placeholder='userId'
            name='userId'
          />

          <input
            type='text'
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
            placeholder='Image URL'
            name='imageUrl'
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name='description'
            placeholder='Add a description'
            rows='3'
          ></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  };
  export default PhotoInputForm
  ;
