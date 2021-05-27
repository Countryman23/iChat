const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false, //состояние пока не авторизован
    // login: avaraa,
    // isLoading: false,
};

// b945a48b-e23b-46ca-a66f-5493b89d60ce

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

export const setAuthUserData = (userId, login, email) => ({type: SET_AUTH_USER_DATA, data: {userId, login, email}})

export default authReducer;

