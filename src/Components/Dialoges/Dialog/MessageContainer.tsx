import React from "react";
import {store} from "../../../redux/redux-store";
import {addMessageAC, updateNewMessageAC} from "../../../redux/reducer/message-reducer";
import {Message} from "./Message";

type MessageContainerType = {}

export const MessageContainer = (props: MessageContainerType) => {
    let state = store.getState();

    const updateMessage = (text: string) => {
        store.dispatch(updateNewMessageAC(text))
    };

    const addMessage = () => {
        store.dispatch(addMessageAC())
    };

    return <Message
        updateMessage={updateMessage}
        addMessage={addMessage}
        messages={state.messagePage.dialogs}
        setMessage={state.messagePage.newMessage}/>
}