import { csrfFetch } from "./csrf";

const LOAD_COMMENTS = 'comments/loadComments';
const ADD_COMMENT = 'comments/addComment';
const REMOVE_COMMENT = 'comments/removeComment';
// const UPDATE_COMMENT ='comments/updateComment';

export const loadComments = (comments) => {
    return {
        type: LOAD_COMMENTS,
        comments
    };
};

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export const removeComment = (commentId) => {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
}

export const getAllComments = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${id}`)
    const data = await response.json()
    dispatch(loadComments(data))
};

export const createComment = (newComment) => async (dispatch) => {
    console.log(newComment)
    const { userId, imageId, body } = newComment;
    const response = await csrfFetch("/api/comments/", {
      method: "POST",
      body: JSON.stringify({
        userId,
        imageId,
        body
      }),
    });
    const data = await response.json();
    dispatch(addComment(data.comment));
    return response;
};

export const deleteComment = (commentId) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${commentId}/delete`, {
        method: "DELETE",
      });
    const data = await response.json();
    dispatch(removeComment(data.id));
    return response;
  };

const initialState = {};

const commentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_COMMENTS:
            return {...action.comments};
        case ADD_COMMENT:
            newState = {...state, ...action.comment}
            return newState;
        // case UPDATE_IMAGE:
        //     newState = {...state, [action.image.id]: {
        //         ...action.image,
        //     }}
        //     return newState;
        case REMOVE_COMMENT:
            newState = {...state}
            delete newState[action.commentId]
            return newState;
        default:
            return state;
    }
};

export default commentReducer;