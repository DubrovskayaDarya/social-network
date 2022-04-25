import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogsArrayType} from "../../../index";

type DialogItemType = {
    data: Array<DialogsArrayType>
}

export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialogName}>
            {props.data.map((t) => {
                return (<div className={s.dialog}>
                    <NavLink style={(param)=>({color: param.isActive ? 'lightblue':'white'})} to={t.link}>{t.name}</NavLink>
                </div>)
            })}
        </div>
    )
}

