import React from 'react';
import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module
import * as axios from 'axios'; //* импортируем всё что есть в библиотеке axios

class Profile extends React.Component {

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
        //axios.get("https://social-network.samuraijs.com/api/1.0/users")
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.carrentPage}&count=${this.props.pageSize}`) //6. добавили props чтобы данные для (page и count) подтягивались с сервера 
            .then(response => {
                this.props.setUsers(response.data.items); //этим мы говорим, добавь в наш store юзеров из items
                this.props.setTotalUsersCount(response.data.totalCount); //19.
            });
    }
    
    //13. делаем метод для onClick (pageNumber это просто логическое название)
    onUserListChanged = (pageNumber) => {
        this.props.setCarrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`) //14. меняем page=$ 
            .then(response => {
                this.props.setUsers(response.data.items); //этим мы говорим, добавь в наш store юзеров из items
            });
    }

    // render получает и отрисовывает данные, затем передаёт их для отрисовки в componentDidMount. и если они изменились они перерисовываются в componentDidUpdate
    render() {
        let pagesCount = this.props.totalUsersCount / this.props.pageSize; //3. количество страниц пользователей 
        
        let pages = [];
        //4 заполняем в pages // дописал / 100 что бы уменьшить количество отображаемых страниц
        for (let i=1; i <= pagesCount / 100; i++) {
            pages.push(i);
        }

        return (
            <div>
                {/* Убираем кнопку */}
                {/* <button onClick={this.getUsers}>Get users</button> */}
                {/*  {props.users.map(u => берём users полученныйе из props.setUsers, которые пришли туда из ответа сервера*/}
                {/* временная запись для проверки, далее выводим количество страниц из результатов сервера */}
                {/* <div className={ModCSS.listNamberSelectedWrapper} >
                    <span className={ModCSS.listNamberSelected}>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div> */} 
                {/* //6 создаём массив*/}
                {/* //10. деллаем логику onClick */}
                <div className={ModCSS.listNamberSelected}>
                {pages.map(p => {
                    return <span className={this.props.carrentPage === p && ModCSS.Selected}
                                onClick={(e) => {this.onUserListChanged(p)}}>{p}</span>
                })}
                </div>
                {this.props.users.map(u => <div key={u.id} className={ModCSS.profile}>
                    <div className={ModCSS.subscribeWrapper}>
                        <div className={ModCSS.subscribeImg}>
                            {/* <img src={u.photoUrl} /> // временно скрыли потомучто этих данных нет в api  */}
                            <img src={u.photos.small != null ? u.photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU"} />
                        </div>
                        <div className={ModCSS.subscribe}>
                            {u.followed
                                //вызываем dispatch и передпм id
                                ? <button onClick={() => { this.props.unFollow(u.id) }} >Unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }} >Follow</button>}
                        </div>
                    </div>
                    <div className={ModCSS.content}>
                        {/* <div>{u.fullName}</div> // временно скрыли потомучто этих данных нет в api */}
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        {/* <div>{u.location.country}</div>// временно скрыли потомучто этих данных нет в api*/}
                        {/* <div>{u.location.city}</div>// временно скрыли потомучто этих данных нет в api */}
                    </div>
                </div>)}
            </div>
        )
    }
}
export default Profile;
