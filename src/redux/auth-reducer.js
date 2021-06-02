import { apiAuthProfile } from "../api/api"

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false, //состояние пока не авторизован
};

export const setAuthUserData = (userId, login, email) => ({type: SET_AUTH_USER_DATA, data: {userId, login, email}})

export const authProfileThunk = () => {
    return (dispatch) => {
        apiAuthProfile().then(data => {
            //resultCode проверка полученных данных(проверка залогининости)
            if (data.resultCode === 0) {
                // let {id, login, email} = response.data.data; //две data потому-что 1я data сидит в инструкции API, 2ю выдаёт response
                let {id, login, email} = data.data; //две data потому-что 1я data сидит в инструкции API, 2ю выдаёт response
                dispatch(setAuthUserData(id, login, email));
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
                    isAuth: true

                };
        default:
            return state;
    }
}

export default authReducer;

