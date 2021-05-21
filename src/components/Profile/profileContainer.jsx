import React from 'react';
import {toggleIsLoadingAC, followAC, unFollowAC, setUsersAC, setCarrentPageAC, setTotalUsersCountAC} from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import * as axios from 'axios'; //* импортируем всё что есть в библиотеке axios
import Profile from './Profile';

class ProfileAPIComponent extends React.Component {

    //если конструктор работает только с супер, то его можно не записывать, это происходит по умолчанию
    // constructor(props) {
    //     super(props);

    //     // перенесли в componentDidMount
    //     // axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //     // .then(response => {
    //     //     // debugger;
    //     //     this.props.setUsers(response.data.items);
    //     // });
    // }

    //убираем let, так как внутри класса мы можем одъявлять только методы
    // getUsers = () => {
    //     if (this.props.users.length === 0) {

    //         axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //             .then(response => {
    //                 // debugger;
    //                 this.props.setUsers(response.data.items);
    //             });
    //     }
    // } // Убираем логику нажатия кнопки

    //создаём объект componentDidMount для отрисовки jsx полученного из render()
    componentDidMount() {
        this.props.toggleIsLoading(true)
        //axios.get("https://social-network.samuraijs.com/api/1.0/users")
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.carrentPage}&count=${this.props.pageSize}`) //6. добавили props чтобы данные для (page и count) подтягивались с сервера 
            .then(response => {
                this.props.toggleIsLoading(false)
                this.props.setUsers(response.data.items); //этим мы говорим, добавь в наш store юзеров из items
                this.props.setTotalUsersCount(response.data.totalCount); //19.
            });
    }
    
    //13. делаем метод для onClick (pageNumber это просто логическое название)
    onUserListChanged = (pageNumber) => {
        this.props.toggleIsLoading(true)
        this.props.setCarrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`) //14. меняем page=$ 
            .then(response => {
                this.props.toggleIsLoading(false)
                this.props.setUsers(response.data.items); //этим мы говорим, добавь в наш store юзеров из items
            });
    }

    // render получает и отрисовывает данные, затем передаёт их для отрисовки в componentDidMount. и если они изменились они перерисовываются в componentDidUpdate
    render() {
        return <Profile totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize} 
                        carrentPage={this.props.carrentPage}
                        //onUserListChanged компонента этого уровня, поэтому её пишем без props
                        onUserListChanged={this.onUserListChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        isLoading={this.props.isLoading} />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.profilePage.users, //это прийдёт в пропс
        pageSize: state.profilePage.pageSize, //2
        totalUsersCount: state.profilePage.totalUsersCount,
        carrentPage: state.profilePage.carrentPage,//5
        isLoading: state.profilePage.isLoading,
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
        toggleIsLoading: (isLoading) => {
            dispatch(toggleIsLoadingAC (isLoading));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAPIComponent);
