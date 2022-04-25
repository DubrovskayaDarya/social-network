import React from "react";
import { DialogsArrayType } from "../../..";
import s from "../Dialogs.module.css";


type MessageType = {
    data: Array<DialogsArrayType>
}

export const Message = (props: MessageType) => {
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