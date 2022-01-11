import { NavLink } from 'react-router-dom';

const PhotoDetail = ({ id, imageUrl, description }) => {
  return (
    <div>
      <NavLink to={`/photo/${id}`}><img src={`${imageUrl}`} alt={description}/></NavLink>
    </div>
  );
};
export default PhotoDetail;
