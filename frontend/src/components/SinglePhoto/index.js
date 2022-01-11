import { useParams, Redirect } from 'react-router-dom';
import * as imageActions from '../../store/images'
import { useDispatch } from 'react-redux';

import './SinglePhoto.css';

//GOALS
// Grab the photo id from the parameter
// Find the correct photo from within the arrray of all articles
// Programmatically render the actual article

const SinglePhoto = ({ images }) => {

  const dispatch = useDispatch();
  const { id } = useParams();

  const singlePhoto = images.find((image) => image.id === +id);
  console.log('singlePhoto', singlePhoto);

  const handleSubmit = (e) => {
    e.preventDefault();

    return dispatch(imageActions.deleteImage(singlePhoto));
  };

  return (
    <div className='singlePhoto'>
      <img src={singlePhoto?.imageUrl} alt={singlePhoto?.description} />
      {singlePhoto.description}
      <form onSubmit={handleSubmit}>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};
export default SinglePhoto;
