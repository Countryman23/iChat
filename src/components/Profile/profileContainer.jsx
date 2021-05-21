// import React from 'react';
import {followAC, unFollowAC, setUsersAC, setCarrentPageAC, setTotalUsersCountAC} from '../../redux/profile-reducer';
import ProfileC from './ProfileС';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        users: state.profilePage.users, //это прийдёт в пропс
        pageSize: state.profilePage.pageSize, //2
        totalUsersCount: state.profilePage.totalUsersCount,
        carrentPage: state.profilePage.carrentPage,//5
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
        setCarrentPage: (pageNumber) => {
            dispatch(setCarrentPageAC (pageNumber)); //12. реакция на onClick, и диспатчим то что нам возвращает вызов AC. (pageNumber это просто логическое название)
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC (totalCount)); //18
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileC);
