import { NavLink } from 'react-router-dom';
import PhotoInputForm from '../PhotoInputForm';

const PhotoEdit = ({ singlePhoto }) => {
    const { id } = singlePhoto
  return (
    <div>
      <NavLink to={`/photos/${id}/edit`}>Edit</NavLink>
    </div>
  );
};

export default PhotoEdit;
