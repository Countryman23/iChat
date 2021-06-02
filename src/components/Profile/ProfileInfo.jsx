import React from 'react';
// import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module
import { Redirect } from "react-router";


const ProfileInfo = (props) => {
// debugger
    //перенаправление на страницу логина если не авторизован
    if (!props.isAuth) {return <Redirect to={"/login"} />};

    return (

        // данные тут не отобразятся, пока не прогрузится сервер (дословно не могу понять как объяснить). 
        // Но прогрузится он не может. И в profileInfo будет null. 
        // Для этого в ProfileInfoContainer создаём условие для ожидания return if (!this.props.profileInfo) {return <Loading />}
        // этим мы говорим, пока profileInfo не получил данные покажи Loading
        <div>
            <div>
                <img src={props.profileInfo.photos.large}/>
                <div>{props.profileInfo.fullName}</div>
                <div>{props.profileInfo.aboutMe}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;
