import { apiAuthProfile, apiLogin, apiLogout } from "../api/api";
import {stopSubmit} from "redux-form"

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false, //состояние пока не авторизован
};

// добавили isAuth для логинизации
// export const setAuthUserData = (userId, login, email) => ({ type: SET_AUTH_USER_DATA, data: { userId, login, email } })
export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_AUTH_USER_DATA, data: { userId, login, email, isAuth } })

export const authProfileThunk = () => {
    return (dispatch) => {
        apiAuthProfile().then(data => {
            //resultCode проверка полученных данных(проверка залогининости)
            if (data.resultCode === 0) {
                // let {id, login, email} = response.data.data; //две data потому-что 1я data сидит в инструкции API, 2ю выдаёт response
                let { id, login, email } = data.data; //две data потому-что 1я data сидит в инструкции API, 2ю выдаёт response
                // dispatch(setAuthUserData(id, login, email));
                dispatch(setAuthUserData(id, login, email, true)); // добавили true для логинизации
            }

        });
    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            // debugger
            return {
                ...state,
                ...action.data,
                // isAuth: true // убрали после реализации логинизации

            };
        default:
            return state;
    }
}

// всё что после dispatch это САНКА
export const LoginThunkCreator = (email, password, rememberMe) => (dispatch) => {
    apiLogin(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(authProfileThunk());
            }
            // проверка авторизвции
            else {
                // берём ошибку из ответа сервера. Если messages > 0 то мы выведем первое сообщение messages[0]. Иаче покажем Some error
                let errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error";
                dispatch(stopSubmit ("login", {_error: errorMessage}));
            }
        });
}

export const LogoutThunkCreator = () => (dispatch) => {
    apiLogout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }

        });
}

export default authReducer;

