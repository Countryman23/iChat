// import React from 'react';
import {followAC, unFollowAC, setUsersAC} from '../../redux/profile-reducer';
import Profile from './Profile';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        users: state.profilePage.users //это прийдёт в пропс
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC (userId));  
        },
        unFollow: (userId) => {
            dispatch(unFollowAC (userId)); 
        },
        setUsers: (users) => {
            dispatch(setUsersAC (users)); // для отображения пользователей
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
