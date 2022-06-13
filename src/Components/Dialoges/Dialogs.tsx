import React from "react";
import s from './Dialogs.module.css'
import {MessageContainer} from "./Dialog/MessageContainer";
import {DialogItemContainer} from "./Dialog/DialogItemContainer";


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <DialogItemContainer/>
            <MessageContainer/>
        </div>
    )
}