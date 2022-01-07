
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

const initialState = { user: null }

const sessionReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SESSION_USER: {}
        case REMOVE_SESSION_USER: {}
        default:
            return state;
    }

}
