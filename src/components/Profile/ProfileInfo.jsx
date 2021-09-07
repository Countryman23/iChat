import React, { useState } from 'react';
// import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module
import { withAuthRedirect } from "../../hoc/authRedirect";
import StatusWithHook from "./statusWithHook";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import userPhoto from "../../userPhoto.png"
import ModCSS from "./Profile.module.css";
import DescriptionFormReduxForm from "./descriptionForm"



const ProfileInfo = (props) => {

    const photoSelect = (e) => {
        if (e.target.files.length) { // e.target.files.length - тут говорится, если длинна у файла есть
            props.savePhoto(e.target.files[0]) // то тогда вызываем какойто колбэк (savePhoto) и передаём этот файл во внешний мир [0]
        }

    }

    let [editMode, setEditMode] = useState(false); // редактирование формы

    const onSubmitHandl = (formData) => {
        console.log(formData)
    }

    return (
        // данные тут не отобразятся, пока не прогрузится сервер (дословно не могу понять как объяснить). 
        // Но прогрузится он не может. И в profileInfo будет null. 
        // Для этого в ProfileInfoContainer создаём условие для ожидания return if (!this.props.profileInfo) {return <Loading />}
        // этим мы говорим, пока profileInfo не получил данные покажи Loading
        <div>
            <div>
                <div className={ModCSS.userPhoto}>
                    <img src={props.profileInfo.photos.large || userPhoto} />
                    
                    {/* этим мы говорим, если isOwner = true то покажи input */}
                    <div>
                        {props.isOwner && <input type={"file"} onChange={photoSelect} />}
                    </div>
                </div>

                {/* дальше применяем Хуки */}
                {/* <Status status = {props.status} getUpdateStatusInfoThunk={props.getUpdateStatusInfoThunk}/> */}
                <StatusWithHook status={props.status} getUpdateStatusInfoThunk={props.getUpdateStatusInfoThunk} />
                
                { editMode ? <DescriptionFormReduxForm profileInfo={props.profileInfo}
                                                        onSubmit={onSubmitHandl} /> 
                            : <Description profileInfo={props.profileInfo} 
                                            isOwner={props.isOwner}
                                            editMode={ () => {setEditMode(true)}} /> }
                
                {/* убрали так как добавили статусы из сервера */}
                {/* <div>{props.profileInfo.aboutMe}</div> */}
                
                <MyPostsContainer />
            </div>
        </div>
    );
}

const Description = (props) => {
    return <div>
        {props.isOwner && <div> <button onClick={props.editMode}>edit</button> </div>}
        <div>
            <b>Full name</b>: {props.profileInfo.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {props.profileInfo.lookingForAJob ? "yes" : "no"}
        </div>
        {props.profileInfo.lookingForAJob &&
            <div>
                <b>My skylls</b>: {props.profileInfo.lookingForAJobDescription}
            </div>}
        <div>
            <b>About me</b>: {props.profileInfo.aboutMe}
        </div>
        <div >
            <b>Contacts</b>: {Object.keys(props.profileInfo.contacts)
                .map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profileInfo.contacts[key]} />
                })}
        </div>
    </div>
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div  className={ModCSS.Contact} >
        <b>{contactTitle}</b>: <b>{contactValue}</b>
    </div>
}

//доступ только авторизованным
let authAccessHOC = withAuthRedirect(ProfileInfo);

export default authAccessHOC;
