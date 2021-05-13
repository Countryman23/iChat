import { createStore, combineReducers } from "redux";
import myPostReducer from "./myPost-reducer"
import messagesReducer from "./messages-reducer"

//собираем все рэдюсеры
let reducers = combineReducers({
    myPostsPage: myPostReducer, 
    messagesPage: messagesReducer,
});
//createStore создаёт внутри себя  state внутр которого есть reducers
let store = createStore(reducers);

window.store = store;

export default store;