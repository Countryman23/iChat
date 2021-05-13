import React from 'react'; //подключаем модуль реакт из папки модулей
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // импортируем сюда компоненту
import reportWebVitals from './reportWebVitals';
//отключаем так как подключили redux
// import store from './redux/store';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
// import {addPostBLL, updatePostChange, subscribe} from './redux/state'; //импортируем не по дефолту, нужны {} // это уже не нужно, та как теперь экспортируем store
// import {reRenderEntireTree} from "./redux/render" // render.js уже не нужен

// переносим массив из app.js
// переносим все массивы state.js
// let postData = [
//     { id: 1, text: "text1", like: "10" },
//     { id: 2, text: "text2", like: "20" },
//     { id: 3, text: "Bi", like: "30" },
//     { id: 4, text: "Mi", like: "40" }
// ];

// let MesDataName = [
//     {id: 1, name: "name1"},
//     {id: 2, name: "name2"},
//     {id: 3, name: "name3"},
//     {id: 4, name: "name4"}
// ];

// let MesDataItem = [
//     {id: 1, item: "item1"},
//     {id: 2, item: "item2"},
//     {id: 3, item: "item3"},
//     {id: 4, item: "item4"},
// ];

// перенесли функцию reRenderEntireTree в render.js
// let reRenderEntireTree = (state) => {
//     // передаём основную компоненту App тегу body
//     ReactDOM.render(<React.StrictMode>
//         <App addState={state} addPostBLL={addPostBLL} />
//         {/* так было до state.js */}
//         {/* <App postData={postData} MesDataName={MesDataName} MesDataItem={MesDataItem}/> */}
//     </React.StrictMode>,
//         document.getElementById('root')
//     );
// }
// вернули обратно для рефакторинга
// let reRenderEntireTree = (state) => {
//     // передаём основную компоненту App тегу body
//     ReactDOM.render(<React.StrictMode>
//         <App addState={state} 
//             addPostBLL={addPostBLL} 
//             newPostData={state} 
//             updatePostChange={updatePostChange}/>
//         {/* так было до state.js */}
//         {/* <App postData={postData} MesDataName={MesDataName} MesDataItem={MesDataItem}/> */}
//     </React.StrictMode>,
//         document.getElementById('root')
//     );
// }

// переписываем с учётом dispatch
// let reRenderEntireTree = (state) => {
//     // новый вид после появления store
//     ReactDOM.render(<React.StrictMode>
//         {/* bind тут нужен чтобы this методa addPostBLL вызывался не от addPostBLL, а от объекта store */}
//         <App addState={state} 
//             addPostBLL={store.addPostBLL.bind(store)} 
//             newPostData={state} 
//             updatePostChange={store.updatePostChange.bind(store)}/>
//         {/* так было до state.js */}
//         {/* <App postData={postData} MesDataName={MesDataName} MesDataItem={MesDataItem}/> */}
//     </React.StrictMode>,
//         document.getElementById('root')
//     );
// }

// let reRenderEntireTree = () => {
//     // debugger
//     // новый вид после появления store
//     ReactDOM.render(<React.StrictMode>
//         {/* bind тут нужен чтобы this методa addPostBLL вызывался не от addPostBLL, а от объекта store */}
//         <App addState={store} 
//             dispatch={store.dispatch.bind(store)} />
//             {/* updatePostChange тут уже не нужен */}
//             {/* updatePostChange={store.updatePostChange.bind(store)} */}
//         {/* так было до state.js */}
//         {/* <App postData={postData} MesDataName={MesDataName} MesDataItem={MesDataItem}/> */}
//     </React.StrictMode>,
//         document.getElementById('root')
//     );
// }

//перепичываем через Provider (context API)
// let reRenderEntireTree = () => {
//     // debugger
//     // новый вид после появления store
//     ReactDOM.render(<React.StrictMode>
//         {/* bind тут нужен чтобы this методa addPostBLL вызывался не от addPostBLL, а от объекта store */}
//         <Provider store={store}>
//             <App />
//         </Provider>
//             {/* updatePostChange тут уже не нужен */}
//             {/* updatePostChange={store.updatePostChange.bind(store)} */}
//         {/* так было до state.js */}
//         {/* <App postData={postData} MesDataName={MesDataName} MesDataItem={MesDataItem}/> */}
//     </React.StrictMode>,
//         document.getElementById('root')
//     );
// }//убрали функцию reRenderEntireTree, так как добавили react-redux

// reRenderEntireTree(store._state); было так
// reRenderEntireTree(store.getState());//убрали, так как добавили react-redux

// тут reRenderEntireTree не означает что мы его запускем. запускается он как переданный аргумент для subscribe после вызова
// store.subscribe(reRenderEntireTree); 

// //так как redux не уведомляет об изменённом state, запрашиваем принудительно изменённый state
// store.subscribe(() => {
//     let state = store.getState()
//     reRenderEntireTree(state);
// });//убрали, так как добавили react-redux

ReactDOM.render(<React.StrictMode>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </React.StrictMode>,
                                    document.getElementById('root')
);

reportWebVitals();
