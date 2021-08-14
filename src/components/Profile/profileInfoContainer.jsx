import React from 'react';
import ProfileInfo from "./profileInfo"
// import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module
import { connect } from 'react-redux';
import {getProfileInfoThunk, getStatusInfoThunk, getUpdateStatusInfoThunk, savePhoto} from '../../redux/profile-reducer';
import { withRouter, Redirect } from "react-router";


//это контейнерная классовая компонента она обязана всё перенаправить в дочернюю компоненту
class ProfileInfoContainer extends React.Component {
    
    reloadProfile() {
        // let userId = this.props.authorizeUserId;
            // if (!userId) {
            //     this.props.history.push("/ProfileInfoContainer/17232")
            // }

            let userId = this.props.match.params.userId; // получаем id пользователя
            if (!userId) {
                userId = 17232;} // -----------------------убирать жёсткую привязку
    
            //перекинули запрос в api.js apiUsersRouter
            // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId) 
            // apiUsersRouter(userId).then(response => {
            //перенесли в profileReducer, сделали через санки
            // apiUsersRouter(userId).then(data => {
            //     // debugger
            //         // this.props.setProfileInfo(response.data); //этим мы говорим, добавь в наш store всё из data
            //         this.props.setProfileInfo(data); //этим мы говорим, добавь в наш store всё из data
            //     });
                        
            //когда компонента функциональная мы пропсы запрашиваем напрямую через props.
            //когда компонента классовая мы пропсы запрашиваем через this.props.
            this.props.getProfileInfoThunk(userId);
            this.props.getStatusInfoThunk(userId); // добавили для отображения статуса
    }

    componentDidMount () {
        this.reloadProfile();
    }       

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId) //Тут говорим если пользователи не равны...
        this.reloadProfile();
    }
    
    render () {
        // (!this.props.profileInfo) если у нас нет profileInfo
        //этим условием мы говорим, пока наш profileInfo равен null, верни нас к profile
        if (!this.props.profileInfo) { return <Redirect to = "/profile" /> };
        // debugger
        return (
            <div>
                {/* //{...this.props} Пропсы которые пришли в нас, мы их раскрываем {...}, и как атрибуты props= передаём нашеё компоненте */}
                {/* <ProfileInfo {...this.props} props={this.props} /> это показано для примера, что внутри */}
                <ProfileInfo {...this.props} profileInfo={this.props.profileInfo}
                                            status={this.props.status}
                                            getUpdateStatusInfoThunk={this.props.getUpdateStatusInfoThunk}
                                            /* isOwner, делаем кнопку если мы выбираем себя */
                                            isOwner={!this.props.match.params.userId}
                                            savePhoto={this.props.savePhoto} /> 
                                            
                
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.status, // добавили для отображения статуса
        authorizeUserId: state.auth.userId, // если мы авторизованны показывать наш профиль. В итоге в компоненту приходят эти данные
        isAuth: state.auth.isAuth
});

//возвращает новую компоненту ProfileInfoContainer и в неё ещё закинет данные из URL
let WithUrlDataContainerComponent = withRouter(ProfileInfoContainer);

//рефакторинг
// export default connect(mapStateToProps, {setProfileInfo})(ProfileInfoContainer);
export default connect(mapStateToProps, 
                        {getProfileInfoThunk, 
                        getStatusInfoThunk,
                        getUpdateStatusInfoThunk,
                        savePhoto}) // savePhoto попадает сюда из Редьюсера
                        (WithUrlDataContainerComponent);
