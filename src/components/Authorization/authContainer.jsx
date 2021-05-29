import React from 'react';
import ModCSS from "./Authorization.module.css"; //Модифицируем наши стили с помощью .module
import Login from "./Login"
import * as axios from 'axios'; //* импортируем всё что есть в библиотеке axios
import { connect } from 'react-redux';
import {setAuthUserData} from "../../redux/auth-reducer"
import {apiAuthProfile} from '../../api/api';

//ниже JSX коде в котором находится HTML разметка
// const AuthContainer = () => {
//     return (
//         // добавляем к HTML разметке JS код. Было className="item", стало {ModCSS.item}
//         // применяем шаблонные строки для конкатенации выражения {`${} ${}`}
//         <div>
//             <div className={`${ModCSS.item} ${ModCSS.active}`}>
//                 <Login />
//             </div>
//             {/* <div className={ModCSS.item}>
//                 Registration
//             </div> */}
//         </div>
//     );
// };

class AuthContainer extends React.Component {
    
    componentDidMount() {
        //перекинули запрос в api.js apiAuthProfile
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, 
        // {withCredentials: true}) //вторым параметром , {} передаём настройки запроса withCredentials что бы куки видели из другого сайта что мы авторизованны
        // apiAuthProfile().then(response => {
        apiAuthProfile().then(data => {
            // debugger
            // if (response.data.resultCode === 0) {
            if (data.resultCode === 0) {
                // let {id, login, email} = response.data.data; //две data потому-что 1я data сидит в инструкции API, 2ю выдаёт response
                let {id, login, email} = data.data; //две data потому-что 1я data сидит в инструкции API, 2ю выдаёт response
                this.props.setAuthUserData (id, login, email);
            }
                
        });
    }
    
    render () {
        return (
            <div className={`${ModCSS.item} ${ModCSS.active}`}>
                <Login {...this.props} />
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect (mapStateToProps, {setAuthUserData}) (AuthContainer);