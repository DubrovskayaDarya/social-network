import React, {ChangeEvent, MouseEvent, useState} from "react";
import {DialogsArrayType} from "../../..";
import s from "../Dialogs.module.css";

type MessageType = {
    data: Array<DialogsArrayType>
}

export const Message = (props: MessageType) => {
    let [messages, setMessages] = useState<Array<DialogsArrayType>>(props.data)
    let [message, setMessage] = useState('');

    const setMessageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
    };

    const setMessageClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        AddMessage(message);
    };

    const AddMessage = (messageNew: string) => {
        let newM = {
            id: 1,
            name: 'Dasha',
            link: '/dialogs/Dasha',
            message: messageNew
        };
        let newMessage = [...messages, newM];
        setMessages(newMessage);
        setMessage('');
    }


    return (
        <div>
            {messages.map((t) => {
                return (
                    <div className={s.space}>
                        <div className={s.messages}>
                            {t.message}
                        </div>
                    </div>)
            })}
            <span>
            <input
                onChange={setMessageChangeHandler}
                value={message}/>
                <button
                    onClick={setMessageClickHandler}>Send</button>
            </span>
        </div>
    )
}