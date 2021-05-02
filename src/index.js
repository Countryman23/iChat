import React from 'react'; //подключаем модуль реакт из папки модулей
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // импортируем сюда компоненту
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

// переносим масив из app.js
// переносим все масивы state.js
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

// передаём основную компоненту App тегу body
ReactDOM.render(<React.StrictMode>
    <App addState={state} />
    {/* так было до state.js */}
    {/* <App postData={postData} MesDataName={MesDataName} MesDataItem={MesDataItem}/> */}
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
