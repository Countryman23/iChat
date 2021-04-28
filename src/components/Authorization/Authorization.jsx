import React from 'react';
import AuthorizationItem from './AuthorizationItem'; //Импортируем сюда компоненту
// import "./Authorization.css";


const Authorization = () => {
    return (
        <div>
            {/* передаём сюда подкомпоненту */}
            <AuthorizationItem />
        </div>
    );
};

export default Authorization;
