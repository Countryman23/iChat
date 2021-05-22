import React from 'react';
import ProfileInfo from "./profileInfo"
// import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module
import * as axios from 'axios'; //* импортируем всё что есть в библиотеке axios
import { connect } from 'react-redux';
import {setProfileInfo} from '../../redux/profile-reducer';
import Loading from "../../loading";

//это контейнерная классовая компонента она обязана всё перенаправить в дочернюю компоненту
class ProfileInfoContainer extends React.Component {
    
    componentDidMount () {
        // debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`) 
            .then(response => {
                this.props.setProfileInfo(response.data); //этим мы говорим, добавь в наш store всё из data
            });
    }
    
    render () {
        // (!this.props.profileInfo) если у нас нет profileInfo
        //этим условием мы говорим, пока наш profileInfo равен null покажи Loading
        if (!this.props.profileInfo) {
            return <Loading />
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

export default connect(mapStateToProps, {setProfileInfo})(ProfileInfoContainer);
