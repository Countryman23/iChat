import React from 'react';
// import {toggleIsLoadingAC, followAC, unFollowAC, setUsersAC, setCarrentPageAC, setTotalUsersCountAC} from '../../redux/profile-reducer';
//Убираем окончание АС чтобы исправить под новый синтаксис
import {getUsersThunkCreator, toggleFollowingInProcess, setCarrentPage, } from '../../redux/profile-reducer';
//изменили после использования санок
import { followThunk, unFollowThunk } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import Profile from './Profile';

class ProfileComponent extends React.Component {

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
        // перенесли в санку
        // this.props.toggleIsLoading(true);
        //перекинули запрос в api.js apiGetUsers
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.carrentPage}&count=${this.props.pageSize}`,
        // {withCredentials: true}
        // ) //6. добавили props чтобы данные для (page и count) подтягивались с сервера 
        //apiGetUsers(this.props.carrentPage, this.props.pageSize).then(response => {
            // перенесли в санку
        // apiGetUsers(this.props.carrentPage, this.props.pageSize).then(data => {
        //         this.props.toggleIsLoading(false)
        //         /// this.props.setUsers(response.data.items); //этим мы говорим, добавь в наш store юзеров из items
        //         /// this.props.setTotalUsersCount(response.data.totalCount); //19.
        //         this.props.setUsers(data.items); //этим мы говорим, добавь в наш store юзеров из items
        //         this.props.setTotalUsersCount(data.totalCount); //19.
        //     });
        this.props.getUsersThunkCreator(this.props.carrentPage, this.props.pageSize);
    // debugger
    }
    
    //13. делаем метод для onClick (pageNumber это просто логическое название)
    onUserListChanged = (pageNumber) => {
        //заменили на санки
        // this.props.toggleIsLoading(true)
        this.props.setCarrentPage(pageNumber);
        //перекинули запрос в api.js apiGetUsers
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        // {withCredentials: true}
        // ) //14. меняем page=$ 
        // apiGetUsers(pageNumber, this.props.pageSize).then(response => {
        //заменили на санки
        // apiGetUsers(pageNumber, this.props.pageSize).then(data => {
        //         this.props.toggleIsLoading(false)
                // this.props.setUsers(response.data.items); //этим мы говорим, добавь в наш store юзеров из items
                // this.props.setUsers(data.items); //этим мы говорим, добавь в наш store юзеров из items
            // });
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    // render получает и отрисовывает данные, затем передаёт их для отрисовки в componentDidMount. и если они изменились они перерисовываются в componentDidUpdate
    render() {
        return <Profile totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize} 
                        carrentPage={this.props.carrentPage}
                        //onUserListChanged компонента этого уровня, поэтому её пишем без props
                        onUserListChanged={this.onUserListChanged}
                        users={this.props.users}
                        // follow={this.props.follow} //убрали после использования санок
                        // unFollow={this.props.unFollow} //убрали после использования санок
                        followThunk={this.props.followThunk}
                        unFollowThunk={this.props.unFollowThunk}
                        isLoading={this.props.isLoading}
                        // toggleFollowingInProcess={this.props.toggleFollowingInProcess} //убрали после использования санок
                        followingInProcess={this.props.followingInProcess} />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.profilePage.users, //это прийдёт в пропс
        pageSize: state.profilePage.pageSize, //2
        totalUsersCount: state.profilePage.totalUsersCount,
        carrentPage: state.profilePage.carrentPage,//5
        isLoading: state.profilePage.isLoading,
        followingInProcess: state.profilePage.followingInProcess
    }
};

//перенеслив в connect
// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC (userId));  
//         },
//         unFollow: (userId) => {
//             dispatch(unFollowAC (userId)); 
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC (users)); // для отображения пользователей
//         },
//         setCarrentPage: (pageNumber) => {
//             dispatch(setCarrentPageAC (pageNumber)); //12. реакция на onClick, и диспатчим то что нам возвращает вызов AC. (pageNumber это просто логическое название)
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC (totalCount)); //18
//         },
//         toggleIsLoading: (isLoading) => {
//             dispatch(toggleIsLoadingAC (isLoading));
//         },
//     }
// };

//рефакторинг
// export default connect(mapStateToProps, mapDispatchToProps)(ProfileAPIComponent);

// //делаем сокращение. так как mapDispatchToProps берёт всего лишь ссылки на AC
// export default connect(mapStateToProps, 
//                         {follow: followAC,  
//                         unFollow: unFollowAC,
//                         setUsers: setUsersAC,
//                         setCarrentPage: setCarrentPageAC,
//                         setTotalUsersCount: setTotalUsersCountAC,
//                         toggleIsLoading: toggleIsLoadingAC})
//                         (ProfileAPIComponent);

//снова редактируем так как современный ситаксис нам это позволяет. Убираем окончание АС, и когда {ключ: значениe} равны их можно записать одним словом
//follow.....getUsersThunkCreator теперь они попадают в пропсы в компоненте ProfileComponent
export default connect(mapStateToProps, {
                            // follow,  //изменили после использования санок
                            // unFollow, //изменили после использования санок
                            followThunk,  
                            unFollowThunk,
                            // setUsers, // убрали так как используем напрямую через санки в reducere
                            setCarrentPage,
                            // setTotalUsersCount, // убрали так как используем напрямую через санки в reducere
                            // toggleIsLoading, // убрали так как используем напрямую через санки в reducere
                            toggleFollowingInProcess,
                            getUsersThunkCreator})
                            (ProfileComponent);
                                        
