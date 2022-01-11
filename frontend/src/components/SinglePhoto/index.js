import { useParams } from 'react-router-dom';

import './SinglePhoto.css';

//GOALS
// Grab the photo id from the parameter
// Find the correct photo from within the arrray of all articles
// Programmatically render the actual article

const SinglePhoto = ({ images }) => {
  const { id } = useParams();

  const singlePhoto = images.find((image) => image.id === +id);
  console.log('singlePhoto', singlePhoto);

  return (
    <div className='singlePhoto'>
      <img src={singlePhoto?.imageUrl} alt={singlePhoto?.description} />
    </div>
  );
};
export default SinglePhoto;
