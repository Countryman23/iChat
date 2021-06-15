import { createStore, combineReducers, applyMiddleware } from "redux";
import myPostReducer from "./myPost-reducer"
import messagesReducer from "./messages-reducer"
import profileReducer from "./profile-reducer"
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'


//собираем все рэдюсеры. соответственно это разделы state
let reducers = combineReducers({
    myPostsPage: myPostReducer, 
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer // тут form обязательный ключ
});
//createStore создаёт внутри себя  state внутр которого есть reducers (создаём store с помощью redux)
//applyMiddleware этим мы говорим, прими промежуточный слой. чтобы запустить санки из санк-киейтора
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;