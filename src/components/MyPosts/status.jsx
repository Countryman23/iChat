import React from 'react';
import ModCSS from "./MyPosts.module.css"; //Модифицируем наши стили с помощью .module

class Status extends React.Component {

    state = {
        editMode: false
    } //создаём локальный стайте

    activatedEditMode = () => {
        this.setState ({
                editMode: true
        }) // вызываем метод setState из React.Component, который обновит эту компоненту и отобразит измеения в ней
    }

    deActivatedEditMode = () => {
        this.setState ({
                editMode: false
        }) 
    }

    render() {
        return (
            <div className={ModCSS.status}>
                {!this.state.editMode && //Этим выражением говорим. Если НЕ ТРУУ покажи этот спан
                <div>
                    <span onDoubleClick={this.activatedEditMode}> {this.props.status} </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deActivatedEditMode} value={this.props.status} />
                </div>
                }
            </div>
        )
    }
}

export default Status;