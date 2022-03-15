import { csrfFetch } from "./csrf";

const LOAD_IMAGES = 'images/loadImages';
const ADD_IMAGE = 'images/addImage';
const REMOVE_IMAGE = 'images/removeImage';
const UPDATE_IMAGE ='images/updateImage';

export const loadImages = (images) => {
    return {
        type: LOAD_IMAGES,
        images
    };
};

export const addImage = (image) => {
    return {
        type: ADD_IMAGE,
        image
    };
};

export const editImage = (image) => {
    return {
        type: UPDATE_IMAGE,
        image
    };
};

export const removeImage = (imageId) => {
    return {
        type: REMOVE_IMAGE,
        imageId
    }
}

export const getAllImages = () => async (dispatch) => {
    const response = await csrfFetch('/api/images/')
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
    const { userId, image } = newPhoto;
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("image", image);
   
    const response = await csrfFetch ("/api/images", {
      method: "POST",
      headers: {'Content-Type':'multipart/form-data'},
      body: formData,
    });
    const data = await response.json();
    dispatch(addImage(data.photo));
    // return response;
};

export const updateImage = (photo) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${photo.id}`, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({photo}),
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(addImage(data.photo));
        // return data;
      }
    }

export const deleteImage = (photo) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${photo.id}`, {
        method: "DELETE",
      });
    const data = await response.json();
    dispatch(removeImage(data.id));
    return response;
  };

const initialState = { };

const imageReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_IMAGES:
            return {...action.images};
        case ADD_IMAGE:
            newState = {...state, ...action.image}
            return newState;
        case UPDATE_IMAGE:
            newState = {...state, [action.image.id]: {
                ...action.image,
            }}
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
