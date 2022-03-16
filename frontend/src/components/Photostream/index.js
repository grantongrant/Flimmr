import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { getAllImages } from '../../store/images';
import PhotoDetail from '../PhotoDetail';
import PhotoInputForm from '../PhotoInputForm';
import SinglePhoto from "../SinglePhoto";
import "../../../src/index.css";

const ImageList = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const imagesObject = useSelector((state) => state.image)
    const images = Object.values(imagesObject);
    const sessionImages = images.filter((image) => image.userId === sessionUser.id)
    // console.log(sessionImages.length)

    useEffect(() => {
        dispatch(getAllImages());
    }, [dispatch]);

    return (
        <div className="photo-page">
            <div className="photo-info-container">
                <div className="avatar-container">
                    <div className="large-avatar"></div>
                </div>
                <div className="info-container">
                    <h1>{sessionUser.name}</h1>
                    <p>{sessionUser.username}</p>
                </div>
            </div>
        <div className="photo-stream-content">
                {/* {images?.map((image) => {
                    return <img src={`${image.imageUrl}`} alt={image.description}/>
                })} */}
                {sessionImages?.map(({ imageUrl, id, description }) => (
                    <PhotoDetail key={id} id={id} imageUrl={imageUrl} description={description}/>
                ))}
        </div>


                {/* <Route path='photos/:id'>
                    <SinglePhoto images={images} />
                </Route>
                <Route path='/upload'>
                    <PhotoInputForm sessionImages={sessionImages}/>
                </Route> */}
        </div>
    )
}

export default ImageList;
