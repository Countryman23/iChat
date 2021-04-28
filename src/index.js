import React from 'react'; //подключаем модуль реакт из папки модулей
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // импортируем сюда компоненту
import reportWebVitals from './reportWebVitals';

// передаём основную компоненту App тегу body
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
