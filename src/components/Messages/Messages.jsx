import React from 'react';
import ModCSS from "./Messages.module.css"; //Модифицируем наши стили с помощью .module
import MessageName from "./MessageName"
import MessageItem from "./MessageItem"
import { withAuthRedirect } from "../../hoc/authRedirect";

const Messages = (props) => {
    
    // let MesDataName = [
    //     {id: 1, name: "name1"},
    //     {id: 2, name: "name2"},
    //     {id: 3, name: "name3"},
    //     {id: 4, name: "name4"}
    // ];

    // let MesDataItem = [
    //     {id: 1, item: "item1"},
    //     {id: 2, item: "item2"},
    //     {id: 3, item: "item3"},
    //     {id: 4, item: "item4"},
    // ];
    // debugger
    // создали метод для перебора массива.. 
    // если функция принимает один параметр, можем писать его без скобок.
    // если return возвращает одну строку, то можно его не прописывать.
    let MesDataNameEl = props.MesDataName
    .map(name => (<MessageName name={name.name} 
                                id={name.id}
                                key={name.id} />));
    let MesDataItemEl = props.MesDataItem
    .map(item => (<MessageItem item={item.item} 
                                id={item.id}
                                key={item.id} />))
    
    let newTextEl = React.createRef();
    //3
    let addTextChange = () => {
        let text = newTextEl.current.value;
        // props.dispatch(textChangeAC(text))
        props.updateTextChange(text);
    }
    //4
    let addMessageButtonUI = () => {
        // props.dispatch(addMessageButtonUIAC());
        props.addMessageButtonBLL();
    }

    let newTextDataRemove = props.newMessageData;

    return (
        <div className={ModCSS.messages}>
            <div className={ModCSS.name}>
                {/* так как это переменная ствим фигурные скобки {} */}
                { MesDataNameEl } 
                {/* в этом способе данные берем из массива с объектами */}
                {/* <MessageName name={MesDataName[0].name} id={MesDataName[0].id} />
                <MessageName name={MesDataName[1].name} id={MesDataName[1].id} /> */}
                {/* передаём атрибуты компоненте, через пропсы */}
                {/* <MessageName name="name3" id="3" />
                <MessageName name="name4" id="4" /> */}
            </div>
            <div className={ModCSS.item}>
                { MesDataItemEl }
                {/*  в этом способе данные берем из массива с объектами */}
                {/* <MessageItem item={MesDataItem[0].item} id={MesDataItem[0].id} />
                <MessageItem item={MesDataItem[1].item} id={MesDataItem[1].id} /> */}
                {/* передаём атрибуты компоненте, через пропсы */}
                {/* <MessageItem item="item3" />
               <MessageItem item="item4" /> */}
                <textarea onChange={addTextChange} 
                            ref={newTextEl} 
                            value={newTextDataRemove} />
                <div>
                    <button onClick={addMessageButtonUI}>
                            Add message</button>
                </div>
            </div>
        </div>
    );
};

//доступ только авторизованным
let authAccessHOC  = withAuthRedirect(Messages);

export default authAccessHOC;
