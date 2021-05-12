import React from 'react';
import {addMessageButtonUIAC, textChangeAC} from "../../redux/messages-reducer";
import Messages from "./Messages"

const MessagesContainer = (props) => {
    
    let addMessageButtonUI = () => {
        props.newState.dispatch(addMessageButtonUIAC());
    }

    let onTextChange = (text) => {
        props.newState.dispatch(textChangeAC(text))
    }

    let state = props.newState.getState();

    return (
        <Messages updateTextChange = {onTextChange}
                addMessageButtonBLL = {addMessageButtonUI}
                MesDataItem = {state.messagesPage.MesDataItem}
                newMessageData = {state.messagesPage.newMessageData}
                MesDataName = {state.messagesPage.MesDataName} />
        )
};

export default MessagesContainer;
