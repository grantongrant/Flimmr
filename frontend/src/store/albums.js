import { csrfFetch } from "./csrf";

const LOAD_ALBUMS = 'albums/loadAlbums';
const ADD_ALBUM = 'albums/addAlbum';
const REMOVE_ALBUM = 'albums/removeAlbum';
const UPDATE_ALBUM ='albums/updateAlbum';

export const addAlbum = (album) => {
    return {
        type: ADD_ALBUM,
        album
    }
}

export const loadAlbums = (albums) => {
    return {
        type: LOAD_ALBUMS,
        albums
    };
};

export const updateAlbum = (album) => {
    return {
        type: UPDATE_ALBUM,
        album
    };
};

export const removeAlbum = (albumId) => {
    return {
        type: REMOVE_ALBUM,
        albumId
    }
}

export const createAlbum = (newAlbum) => async (dispatch) => {
    const { userId, name, coverImg, description } = newAlbum;
    const response = await csrfFetch("/api/albums/", {
      method: "POST",
      body: JSON.stringify({
        userId,
        name,
        coverImg,
        description
      }),
    });
    const data = await response.json();
    dispatch(addAlbum(data.album));
    return data;
};

export const getTheAlbum = (albumId) => async (dispatch) => {
    const response = await csrfFetch(`/api/albums/album/${albumId}`)
    const data = await response.json()
    dispatch(loadAlbums(data))
}

export const getAllAlbums = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/albums/${userId}`)
    const data = await response.json()
    dispatch(loadAlbums(data))
};

export const updateAnAlbum = (updatedAlbum) => async (dispatch) => {
    console.log("UPDATED ALBUM", updatedAlbum)
    const { albumId, name, description} = updatedAlbum;
    const response = await csrfFetch("/api/albums/edit", {
        method: "PUT",
        body: JSON.stringify({
            albumId,
            name,
            description,
        }),
    });
    const album = await response.json();
    dispatch(updateAlbum(album));
    return album;
}

export const deleteAnAlbum = (albumId) => async (dispatch) => {
    const response = await csrfFetch(`/api/albums/${albumId}/delete`, {
        method: "DELETE",
      });
    const data = await response.json();
    dispatch(removeAlbum(data.id));
    return data;
  };


const initialState = {};

const albumReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_ALBUMS:
            return {...action.albums};
        case ADD_ALBUM:
            newState = {...state, ...action.album}
            return newState;
        case UPDATE_ALBUM:
            newState = {...state, [action.album.id]: {
                ...action.album,
            }}
            return newState;
        case REMOVE_ALBUM:
            newState = {...state}
            delete newState[action.albumId]
            return newState;
        default:
            return state;
    }
};

export default albumReducer;