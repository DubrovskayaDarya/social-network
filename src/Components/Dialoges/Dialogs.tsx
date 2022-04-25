import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

// array with data
let dialogsArray = [
    {
        name: 'Dasha',
        link: '/dialogs/1',
        message: "Hi"
    },
    {
        name: 'Sasha',
        link: '/dialogs/2',
        message: "Lol"
    },
    {
        name: 'Nastya',
        link: '/dialogs/3',
        message: "How are you?"
    },
    {
        name: 'Denis',
        link: '/dialogs/4',
        message: ";)"
    },
    {
        name: 'Roman',
        link: '/dialogs/5',
        message: "I love you!"
    }
]

// types
type DialogItemType = {
    data: Array<DataArrayType>
}
type DataArrayType = {
    name: string
    link: string
    message: string
}
type MessageType = {
    data: Array<DataArrayType>
}

// components with map to DialogN Names and Messages
const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialogName}>
            {props.data.map((t) => {
                return (<div className={s.dialog}>
                    <NavLink to={t.link}>{t.name}</NavLink>
                </div>)
            })}
        </div>
    )
}
const Message = (props: MessageType) => {
    return (
        <div>
            {props.data.map((t) => {
                return(
                <div className={s.space}>
                <div className={s.messages}> {t.message} </div>
                </div>)
            })}
        </div>
    )
}

//main component!
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <DialogItem data={dialogsArray}/>
            <Message data={dialogsArray}/>
        </div>
    )
}