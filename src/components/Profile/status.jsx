import React from 'react';
import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status // синхронизируем с пропсами
    } //создаём локальный стайте

    activatedEditMode = () => {
        this.setState ({
                editMode: true
        }); // вызываем метод setState из React.Component, который обновит эту компоненту и отобразит измеения в ней
    }

    deActivatedEditMode = () => {
        this.setState ({
                editMode: false
        });
        this.props.getUpdateStatusInfoThunk(this.state.status);
    }

    onStatusChenge = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
        
    }

    render() {
        return (
            <div className={ModCSS.status}>
                {!this.state.editMode && //Этим выражением говорим. Если НЕ ТРУУ покажи этот спан
                <div>
                    <span onDoubleClick={this.activatedEditMode}> 
                    {this.props.status || "---"} </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChenge}
                    autoFocus={true} onBlur={this.deActivatedEditMode} 
                    value={this.state.status} />
                </div>
                }
            </div>
        )
    }
}

export default Status;