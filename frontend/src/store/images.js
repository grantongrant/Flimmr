import { csrfFetch } from "./csrf";

const LOAD_IMAGES = 'images/loadImages';
const ADD_IMAGE = 'images/addImage';
const REMOVE_IMAGE = 'images/removeImage';

export const loadImages = (images) => {
    return {
        type: LOAD_IMAGES,
        images
    };
};

export const addImage = (newImage) => {
    return {
        type: ADD_IMAGE,
        newImage
    };
};

export const removeImage = (imageId) => {
    return {
        type: REMOVE_IMAGE,
        imageId
    }
}

export const getAllImages = () => async (dispatch) => {
    const response = await fetch('/api/images')
    const data = await response.json()
    dispatch(loadImages(data))
};

// export const createImage = (payload) => async (dispatch) => {
//     const response = await fetch('/api/images', {
//       method: 'POST',
//       headers: {'Content-Type':'application/json'},
//       body: JSON.stringify(payload)
//     })
//     const data = await response.json();
//     dispatch(addImage(data));
//     return data;
//   }

  export const createImage = (newPhoto) => async (dispatch) => {
    const { userId, imageUrl, description } = newPhoto;
    const response = await csrfFetch("/api/images", {
      method: "POST",
      body: JSON.stringify({
        userId,
        imageUrl,
        description,
      }),
    });
    const data = await response.json();
    dispatch(addImage(data.photo));
    return response;
};

export const deleteImage = (photo) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${photo.id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return dispatch(removeImage(data.photo.id));
};

const initialState = { }

const imageReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_IMAGES:
            // newState = {...state}
            // newState.images = action.images.reduce((images, image) => {
            //     images[image.id] = image
            //     return images;
            // }, {})
            return {...action.images};
            // newState = Object.assign({}, state);
            // newState.user = action.payload;
            // return newState;
        case ADD_IMAGE:
            newState = {...state}
            newState.images = {...newState.images, [action.newPhoto.id]: action.newImage}
            return newState;
        case REMOVE_IMAGE:
            newState = {...state}
            delete newState[action.imageId]
            return newState;
        default:
            return state;
    }
};

export default imageReducer;
