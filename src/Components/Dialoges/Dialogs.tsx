import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./Dialog/Dialog";
import {Message} from "./Dialog/Message";
import {DialogsType} from "../../redux/state";


type DialogType = {
    data: Array<DialogsType>
}

export const Dialogs = (props:DialogType) => {
    return (
        <div className={s.dialogs}>
            <DialogItem data={props.data}/>
            <Message data={props.data}/>
        </div>
    )
}