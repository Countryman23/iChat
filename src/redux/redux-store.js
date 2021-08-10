import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import myPostReducer from "./myPost-reducer"
import messagesReducer from "./messages-reducer"
import profileReducer from "./profile-reducer"
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";


//собираем все рэдюсеры. соответственно это разделы state
let reducers = combineReducers({
    myPostsPage: myPostReducer, 
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer, // тут form обязательный ключ
    app: appReducer
});


//добавили для расширения браузера Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//createStore создаёт внутри себя  state внутр которого есть reducers (создаём store с помощью redux)
//applyMiddleware этим мы говорим, прими промежуточный слой. чтобы запустить санки из санк-киейтора
// let store = createStore(reducers, applyMiddleware(thunkMiddleware)); //убрали после добавления Redux DevTools

// Изменили после внедрения Redux DevTools, во избежании конфликтов
// window.store = store;
window.__store__ = store;

export default store;