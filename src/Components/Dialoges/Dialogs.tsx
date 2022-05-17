import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./Dialog/Dialog";
import {Message} from "./Dialog/Message";
import {ActionTypes, DialogsType} from "../../redux/store";


type DialogType = {
    data: Array<DialogsType>
    setMessage: string
    dispatch: (action: ActionTypes) => void
}

export const Dialogs = (props: DialogType) => {
    return (
        <div className={s.dialogs}>
            <DialogItem data={props.data}/>
            <Message
                data={props.data}
                dispatch={props.dispatch}
                setMessage={props.setMessage}/>
        </div>
    )
}