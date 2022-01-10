import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Route, Switch } from 'react-router-dom';

import { getAllImages } from '../../store/images';

const ImageList = () => {
    const dispatch = useDispatch();

    const imagesObject = useSelector((state) => state.image.entries)
    const object = imagesObject.forEach((object, index) => object[index])
    const images = Object.values(imagesObject);

    useEffect(() => {
        dispatch(getAllImages());
    }, [dispatch]);

    return (
        <div>
            <h1>Hello from Profile Page</h1>
        </div>
    )
}

export default ImageList;
