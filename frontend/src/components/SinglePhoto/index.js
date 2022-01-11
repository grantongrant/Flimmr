import { useParams, Redirect } from 'react-router-dom';
import * as imageActions from '../../store/images'
import { useDispatch } from 'react-redux';
import { Route, Switch } from "react-router-dom";

import './SinglePhoto.css';
import PhotoEdit from '../PhotoEdit';
import PhotoEditForm from '../PhotoEditForm';

//GOALS
// Grab the photo id from the parameter
// Find the correct photo from within the arrray of all articles
// Programmatically render the actual article

const SinglePhoto = ({ images }) => {

  const dispatch = useDispatch();
  const { id } = useParams();

  const singlePhoto = images.find((image) => image.id === +id);
  console.log('singlePhoto', singlePhoto);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(imageActions.deleteImage(singlePhoto));
    return <Redirect to="/photos" />;
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(imageActions.deleteImage(singlePhoto));
    return <Redirect to="/photos" />;
  };

  return (
    <div className='singlePhoto'>
      <img src={singlePhoto?.imageUrl} alt={singlePhoto?.description} />
      {singlePhoto.description}
        <button onClick={handleDelete}>Delete</button>
        <PhotoEdit singlePhoto={singlePhoto} />

        <Switch>
            <Route path="images/:id">
                <PhotoEditForm singlePhoto={singlePhoto}/>
            </Route>
        </Switch>
    </div>


  );
};
export default SinglePhoto;
