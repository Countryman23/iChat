import React from 'react'; //подключаем модуль реакт
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // импортируем компоненту
import reportWebVitals from './reportWebVitals';

// передаём основную компоненту тегу body
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
