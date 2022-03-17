import { csrfFetch } from "./csrf";

// const LOAD_ALBUMS = 'albums/loadAlbums';
const ADD_ALBUM = 'albums/addAlbum';
// const REMOVE_ALBUM = 'albums/removeAlbum';
// const UPDATE_ALBUM ='albums/updateAlbum';

export const addAlbum = (album) => {
    return {
        type: ADD_ALBUM,
        album
    }
}

export const createAlbum = (newAlbum) => async (dispatch) => {
    const { userId, name, description } = newAlbum;
    const response = await csrfFetch("/api/albums/", {
      method: "POST",
      body: JSON.stringify({
        userId,
        name,
        description
      }),
    });
    const data = await response.json();
    dispatch(addAlbum(data.album));
    return data;
};



const initialState = {};

const albumReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        // case LOAD_COMMENTS:
        //     return {...action.comments};
        case ADD_ALBUM:
            newState = {...state, ...action.album}
            return newState;
        // case UPDATE_COMMENT:
        //     newState = {...state, [action.comment.id]: {
        //         ...action.comment,
        //     }}
        //     return newState;
        // case REMOVE_COMMENT:
        //     newState = {...state}
        //     delete newState[action.commentId]
        //     return newState;
        default:
            return state;
    }
};

export default albumReducer;