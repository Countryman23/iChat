import React, { useState, useEffect } from 'react';
import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module

const StatusWithHook = (props) => {

    // ниже переписываем в короткий вид
    // let stateWithSetState = useState(false); // нам useState вщзвращает массив из двух элементов. первым элементом будет сидеть значение [0], вторым элементо будет ф-я которое это значение устанавливает
    //                                         // достаем из массива первое значение [0]
    //                                         // сто старта это будет false
    // let editMode = stateWithSetState[0];
    // let setEditMode = stateWithSetState[1]; //вторым элементом сидит функуия которая будет изменять значение editMode

    let [editMode, setEditMode] = useState(false); // меняем вызов статуса
    let [status, setStatus] = useState(props.status);

    // мы говорим реакту запускать нашь useEffect не всегда,
    // а только в момент когда компонента монтировалась в первый раз
    useEffect( () => {
        setStatus(props.status)
    }, [props.status] ) // [props.status] этим мы говорим, useEffect запускайся каждый раз когда будет изменён props.status

    const activatedEditMode = () => {
        setEditMode(true);
    }

    const deActivatedEditMode = () => {
        setEditMode(false);
        props.getUpdateStatusInfoThunk(status);
    }
    
    const onStatusChenge = (e) => {
        setStatus(e.currentTarget.value);
        
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <b>Status</b>: <span onDoubleClick={activatedEditMode}>
                        {props.status || "---"} </span>
                    
                </div>
            }
            {editMode &&
                <div >
                    <input autoFocus={true}
                            onBlur={deActivatedEditMode}
                            onChange={onStatusChenge}
                            value={status}/>
                </div>
            }
        </div>
    )
}

export default StatusWithHook;