import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../redux/store/store";

type DialogItemType = {
    dialogs: Array<DialogsType>
}

export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialogName}>
            {props.dialogs.map((t) => {
                return (<div className={s.dialog}>
                    <NavLink style={(param)=>({color: param.isActive ? 'lightblue':'white'})} to={t.link}>{t.name}</NavLink>
                </div>)
            })}
        </div>
    )
}

