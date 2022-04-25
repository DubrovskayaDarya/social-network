import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./Dialog/Dialog";
import {Message} from "./Dialog/Message";
import { DialogsArrayType } from "../..";


type DialogsType = {
    data: Array<DialogsArrayType>
}

export const Dialogs = (props:DialogsType) => {
    return (
        <div className={s.dialogs}>
            <DialogItem data={props.data}/>
            <Message data={props.data}/>
        </div>
    )
}