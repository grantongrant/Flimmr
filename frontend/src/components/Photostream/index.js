import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { getAllImages } from '../../store/images';
import PhotoDetail from '../PhotoDetail';
import SinglePhoto from "../SinglePhoto";
import './Photostream.css'

const ImageList = () => {
    const dispatch = useDispatch();

    const imagesObject = useSelector((state) => state.image)
    const images = Object.values(imagesObject);
    console.log(images)


    useEffect(() => {
        dispatch(getAllImages());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="photo-gallery">
             <main className="photo">
                {/* {images?.map((image) => {
                    return <img src={`${image.imageUrl}`} alt={image.description}/>
                })} */}
                {images?.map(({ imageUrl, id, description }) => (
                    <PhotoDetail key={id} id={id} imageUrl={imageUrl} description={description}/>
                ))}
            </main>
            </div>

            <Switch>
                <Route path='/photos/:id'>
                    <SinglePhoto images={images} />
                </Route>
            </Switch>
        </div>
    )
}

export default ImageList;
