import { csrfFetch } from "./csrf";

const SET_SESSION_USER = 'session/setSessionUser';
const REMOVE_SESSION_USER = 'session/removeSessionUser';

export const setSessionUser = (user) => {
    return {
        type: SET_SESSION_USER,
        user
    }
};
export const removeSessionUser = (user) => {
    return {
        type: REMOVE_SESSION_USER,
        user
    }
};

export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        }),
    });
    const data = await response.json();
    dispatch(setSessionUser(data.user));
    return response;
};

const initialState = { user: null }

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case SET_SESSION_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_SESSION_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
