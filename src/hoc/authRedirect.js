import React from 'react';
import { Redirect } from "react-router";
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth, // проверка авторизации. isAuth прийдёт в пропсах (в Messages.jsx) и мы сможем его прочитать
});

//реализация НОС компоненты. Когда вызывается withAuthRedirect, вызывается две компоненты
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
            //перенаправление на страницу логина если не авторизован
            // if (!this.props.isAuth) {return <Redirect to={"/login"} />};
            return <Component {...this.props} /> // все пропсы которые приходят в withAuthRedirect, передаются в {...props}
        }
    }
    
    let ConnectedAuthAccessHOC = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthAccessHOC;
}