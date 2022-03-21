import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllImages, getAllImagesFromUser } from '../../store/images';
import PhotoDetail from '../PhotoDetail';
import "../../../src/index.css";

const Explore = () => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const imagesObject = useSelector((state) => state.image)
    const images = Object.values(imagesObject);
    const [isLoaded, setIsLoaded] = useState(false);
    console.log(images)
    // const sessionImages = images.filter((image) => image?.userId === sessionUser.id)

    useEffect( () => {
        dispatch(getAllImages());
        // setIsLoaded(true)
    }, [dispatch]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);
        return () => clearTimeout(timer);
    });
    return (
    <>
    <div className="album-page-container">
        <div id="navbar-background"></div>
        <div className="explore-header">Explore</div>
        {isLoaded &&
            <div className="photo-stream-content">
                {images?.map((image) => (
                    <>
                    {console.log(image)}
                    <PhotoDetail key={image.id} id={image.id} imageUrl={image.imageUrl} description={image.description}/>
                    </>
                ))}
            </div>}
        </div>
    </>
    )
}

export default Explore;