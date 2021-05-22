import { createStore, combineReducers } from "redux";
import myPostReducer from "./myPost-reducer"
import messagesReducer from "./messages-reducer"
import profileReducer from "./profile-reducer"

//собираем все рэдюсеры
let reducers = combineReducers({
    myPostsPage: myPostReducer, 
    messagesPage: messagesReducer,
    profilePage: profileReducer
});
//createStore создаёт внутри себя  state внутр которого есть reducers (создаём store с помощью redux)
let store = createStore(reducers);

window.store = store;

export default store;