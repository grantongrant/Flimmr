import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { getAllImages } from '../../store/images';

const ImageList = () => {
    const dispatch = useDispatch();

    const imagesObject = useSelector((state) => state.image.images)
    console.log(imagesObject);
    const images = Object.values(imagesObject);
    console.log(images)

    useEffect(() => {
        dispatch(getAllImages());
    }, [dispatch]);

    return (
        <div>
            <h1>Hello from Profile Page</h1>
            <ol>
                {images.map(image => {
                    return <li key={image.id}>{image}</li> }
                )}
            </ol>
        </div>
    )
}

export default ImageList;
