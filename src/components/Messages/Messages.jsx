import React from 'react';
import ModCSS from "./Messages.module.css"; //Модифицируем наши стили с помощью .module
import MessageName from "./MessageName"
import MessageItem from "./MessageItem"
// import MessageData from "./MessageData"

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
    
    // создали метод для перебора масива. 
    // если функция принимает один параметр, можем писать его без скобок.
    // если return возвращает одну строку, то можно его не прописывать.
    let MesDataNameEl = props.state.MesDataName.map(name => (<MessageName name={name.name} id={name.id} />));
    let MesDataItemEl = props.state.MesDataItem.map(item => (<MessageItem item={item.item} id={item.id} />))

    return (
        <div className={ModCSS.messages}>
            <div className={ModCSS.name}>
                {/* так как это переменная ствим фигурные скобки {} */}
                { MesDataNameEl } 
                {/* в этом способе данные берем из масива с объектами */}
                {/* <MessageName name={MesDataName[0].name} id={MesDataName[0].id} />
                <MessageName name={MesDataName[1].name} id={MesDataName[1].id} /> */}
                {/* передаём атрибуты компоненте, через пропсы */}
                {/* <MessageName name="name3" id="3" />
                <MessageName name="name4" id="4" /> */}
            </div>
            <div className={ModCSS.item}>
                { MesDataItemEl }
                {/* в этом способе данные берем из масива с объектами */}
                {/* <MessageItem item={MesDataItem[0].item} id={MesDataItem[0].id} />
                <MessageItem item={MesDataItem[1].item} id={MesDataItem[1].id} /> */}
                {/* передаём атрибуты компоненте, через пропсы */}
                {/* <MessageItem item="item3" />
               <MessageItem item="item4" /> */}
            </div>
        </div>
    );
};

export default Messages;
