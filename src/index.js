// import React from 'react'; //подключаем модуль реакт из папки модулей
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'; // импортируем сюда компоненту
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
// import {addPostBLL} from './redux/state'; //импортируем не по дефолту, нужны {}
import {reRenderEntireTree} from "./redux/render"

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

reRenderEntireTree(state);

reportWebVitals();
