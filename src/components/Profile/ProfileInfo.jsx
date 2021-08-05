import React from 'react';
// import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module
import { withAuthRedirect } from "../../hoc/authRedirect";
import StatusWithHook from "./statusWithHook"
import MyPostsContainer from "../MyPosts/MyPostsContainer"


const ProfileInfo = (props) => {

    return (

        // данные тут не отобразятся, пока не прогрузится сервер (дословно не могу понять как объяснить). 
        // Но прогрузится он не может. И в profileInfo будет null. 
        // Для этого в ProfileInfoContainer создаём условие для ожидания return if (!this.props.profileInfo) {return <Loading />}
        // этим мы говорим, пока profileInfo не получил данные покажи Loading
        <div>
            <div>
                <img src={props.profileInfo.photos.large}/>
                {/* дальше применяем Хуки */}
                {/* <Status status = {props.status} getUpdateStatusInfoThunk={props.getUpdateStatusInfoThunk}/> */}
                <StatusWithHook status = {props.status} getUpdateStatusInfoThunk={props.getUpdateStatusInfoThunk}/>
                <div>{props.profileInfo.fullName}</div>
                {/* убрали так как добавили статусы из сервера */}
                {/* <div>{props.profileInfo.aboutMe}</div> */}
                <MyPostsContainer />
            </div>
        </div>
    );
}

//доступ только авторизованным
let authAccessHOC  = withAuthRedirect(ProfileInfo);

export default authAccessHOC;
