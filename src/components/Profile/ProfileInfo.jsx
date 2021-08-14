import React from 'react';
// import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module
import { withAuthRedirect } from "../../hoc/authRedirect";
import StatusWithHook from "./statusWithHook";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import userPhoto from "../../userPhoto.png"
import ModCSS from "./Profile.module.css";


const ProfileInfo = (props) => {

    const photoSelect = (e) => {
        if(e.target.files.length){ // e.target.files.length - тут говорится, если длинна у файла есть
            props.savePhoto(e.target.files[0]) // то тогда вызываем какойто колбэк (savePhoto) и передаём этот файл во внешний мир [0]
        }
        
    }

    return (

        // данные тут не отобразятся, пока не прогрузится сервер (дословно не могу понять как объяснить). 
        // Но прогрузится он не может. И в profileInfo будет null. 
        // Для этого в ProfileInfoContainer создаём условие для ожидания return if (!this.props.profileInfo) {return <Loading />}
        // этим мы говорим, пока profileInfo не получил данные покажи Loading
        <div>
            <div>
                <div className={ModCSS.userPhoto}>
                    <img src={props.profileInfo.photos.large || userPhoto}/>
                    {props.isOwner && <input type={"file"} onChange={photoSelect} /> }
                    {/* этим мы говорим, если isOwner = true то покажи input */}
                </div>
                
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
