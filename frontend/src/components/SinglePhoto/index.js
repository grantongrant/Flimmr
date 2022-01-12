import { useParams, Redirect } from 'react-router-dom';
import * as imageActions from '../../store/images'
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from "react-router-dom";
import './SinglePhoto.css';
import PhotoEdit from '../PhotoEdit';
import PhotoEditForm from '../PhotoEditForm';

//GOALS
// Grab the photo id from the parameter
// Find the correct photo from within the arrray of all photos
// Programmatically render the actual photos

const SinglePhoto = () => {

    const imagesObject = useSelector((state) => state.image)
    const images = Object.values(imagesObject);

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const singlePhoto = images.find((image) => image.id === +id);
  console.log('singlePhoto', singlePhoto);

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(imageActions.deleteImage(singlePhoto)).then(history.push("/photos"))
  };


//   const handleEdit = (e) => {
//     e.preventDefault();
//     dispatch(imageActions.deleteImage(singlePhoto));
//     return <Redirect to="/photos" />;
//   };

  return (
    <div className='singlePhoto'>
      <img src={singlePhoto?.imageUrl} alt={singlePhoto?.description} />
      {singlePhoto.description}
        <button onClick={handleDelete}>Delete</button>
        <PhotoEdit singlePhoto={singlePhoto} />

        <Switch>
            <Route path="photos/:id/edit">
                <PhotoEditForm singlePhoto={singlePhoto}/>
            </Route>
        </Switch>
    </div>

  );
};
export default SinglePhoto;
