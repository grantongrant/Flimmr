import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllImages, getAllImagesFromUser } from '../../store/images';
import PhotoDetail from '../PhotoDetail';
import "../../../src/index.css";
import Footer
 from '../Footer';
const Explore = () => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const imagesObject = useSelector((state) => state.image)
    const images = Object.values(imagesObject);
    const [isLoaded, setIsLoaded] = useState(false);
    // const sessionImages = images.filter((image) => image?.userId === sessionUser.id)

    useEffect( () => {
        dispatch(getAllImages());
        // setIsLoaded(true)
    }, [dispatch]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 300);
        return () => clearTimeout(timer);
    });
    return (
    <>
    <div className="album-page-container">
        <div id="navbar-background"></div>
        <div className="explore-header">Explore</div>
        {isLoaded && images ?
            <div className="photo-stream-content">
                {images?.map((image) => (
                    <>
                    <PhotoDetail key={image.id} id={image.id} imageUrl={image.imageUrl} description={image.description}/>
                    </>
                ))}
            </div> : <div className="loading photo-loading"></div>}
            <Footer />
        </div>
    </>
    )
}

export default Explore;