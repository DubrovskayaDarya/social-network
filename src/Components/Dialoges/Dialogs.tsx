import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./Dialog/Dialog";
import {DialogsType} from "../../redux/store";
import {MessageContainer} from "./Dialog/MessageContainer";


type DialogType = {
    data: Array<DialogsType>
}

export const Dialogs = (props: DialogType) => {
    return (
        <div className={s.dialogs}>
            <DialogItem data={props.data}/>
            <MessageContainer/>
        </div>
    )
}