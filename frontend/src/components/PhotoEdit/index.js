import { NavLink, Route, Switch } from 'react-router-dom';
import PhotoInputForm from '../PhotoInputForm';
import PhotoEditForm from '../PhotoEditForm';

const PhotoEdit = ({ singlePhoto }) => {
    const { id } = singlePhoto
  return (
    <div>
        <div>
            <NavLink to={`/photos/${id}/edit`}>Edit</NavLink>
        </div>

        <Switch>
            <Route path="photos/:id/edit">
                <PhotoEditForm singlePhoto={singlePhoto}/>
            </Route>
        </Switch>

    </div>
  );
};

export default PhotoEdit;
