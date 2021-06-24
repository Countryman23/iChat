import { apiAuthProfile, apiLogin, apiLogout } from "../api/api";
import {stopSubmit} from "redux-form"
import {authProfileThunk} from "./auth-reducer"

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
    initialized: false,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state, // мы делаем копию state
                initialized: true, // и меняем initialized
            };
        default:
            return state;
    }
}

export const initializedSaccess = () => ({type: SET_INITIALIZED})

// санк криейтор
export const initializApp = () => (dispatch) => {
    let promise = dispatch(authProfileThunk());
    Promise.all([promise])
    .then (() => {
        dispatch(initializedSaccess());
    })
}

export default appReducer;

