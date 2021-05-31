import React from 'react';
import ProfileInfo from "./profileInfo"
// import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module
import { connect } from 'react-redux';
import {setProfileInfo} from '../../redux/profile-reducer';
import { withRouter, Redirect } from "react-router";
import {apiUsersRouter} from '../../api/api';


//это контейнерная классовая компонента она обязана всё перенаправить в дочернюю компоненту
class ProfileInfoContainer extends React.Component {
    
    componentDidMount () {
        let userId = this.props.match.params.userId; // получаем id пользователя
        if (!userId) {
            userId = 2;
        }
        //перекинули запрос в api.js apiUsersRouter
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId) 
        // apiUsersRouter(userId).then(response => {
        apiUsersRouter(userId).then(data => {
            // debugger
                // this.props.setProfileInfo(response.data); //этим мы говорим, добавь в наш store всё из data
                this.props.setProfileInfo(data); //этим мы говорим, добавь в наш store всё из data
            });
    }
    
    render () {
        // (!this.props.profileInfo) если у нас нет profileInfo
        //этим условием мы говорим, пока наш profileInfo равен null, верни нас к profile
        if (!this.props.profileInfo) {
            return <Redirect to = "/profile" />
        }
        // debugger
        return (
            <div>
                {/* //{...this.props} Пропсы которые пришли в нас, мы их раскрываем {...}, и как атрибуты props= передаём нашеё компоненте */}
                {/* <ProfileInfo {...this.props} props={this.props} /> это показано для примера, что внутри */}
                <ProfileInfo {...this.props} profileInfo={this.props.profileInfo} />
                
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
        profileInfo: state.profilePage.profileInfo
});

//возвращает новую компоненту ProfileInfoContainer и в неё ещё закинет данные из URL
let WithUrlDataContainerComponent = withRouter(ProfileInfoContainer);

//рефакторинг
// export default connect(mapStateToProps, {setProfileInfo})(ProfileInfoContainer);
export default connect(mapStateToProps, {setProfileInfo})(WithUrlDataContainerComponent);
