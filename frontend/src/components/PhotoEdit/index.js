import { NavLink, Route, Switch } from 'react-router-dom';
import PhotoEditForm from '../PhotoEditForm';
import React from 'react';

const PhotoEdit = ({ singlePhoto }) => {
    const { id } = singlePhoto

  return (
    <div>
        <>
            <NavLink to={`/photos/${id}/edit`}>Edit</NavLink>
        </>

        <Switch>
            <Route path="photos/:id/edit">
                <PhotoEditForm singlePhoto={singlePhoto}/>
            </Route>
        </Switch>

    </div>
  );
};

export default PhotoEdit;
