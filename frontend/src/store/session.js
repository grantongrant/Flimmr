import { csrfFetch } from "./csrf";

const SET_SESSION_USER = 'session/setSessionUser';
const REMOVE_SESSION_USER = 'session/removeSessionUser';

const setSessionUser = (user) => {
    return {
        type: SET_SESSION_USER,
        payload: user,
    }
};

const removeSessionUser = () => {
    return {
        type: REMOVE_SESSION_USER,
    }
};

export const signup = (user) => async (dispatch) => {
    const { name, username, email, password } = user;
    const response = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        username,
        email,
        password,
      }),
    });
    const data = await response.json();
    dispatch(setSessionUser(data.user));
    return response;
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

export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setSessionUser(data.user));
    return response;
  };

export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
      method: 'DELETE',
    });
    dispatch(removeSessionUser());
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
