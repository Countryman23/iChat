// создали render.js что прокинуть фнкцию reRenderEntireTree в state и index и перересовать страницу 
import React from 'react'; //подключаем модуль реакт из папки модулей
import ReactDOM from 'react-dom';
import './../index';
import App from './../../src/App'; // импортируем сюда компоненту
import { addPostBLL, updatePostChange } from './state'; //импортируем не по дефолту, нужны {}

export let reRenderEntireTree = (state) => {
    // передаём основную компоненту App тегу body
    ReactDOM.render(<React.StrictMode>
        <App addState={state} addPostBLL={addPostBLL} newPostData={state} updatePostChange={updatePostChange}/>
        {/* так было до state.js */}
        {/* <App postData={postData} MesDataName={MesDataName} MesDataItem={MesDataItem}/> */}
    </React.StrictMode>,
        document.getElementById('root')
    );
}