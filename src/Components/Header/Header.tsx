import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean,
    login: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src={'https://images-platform.99static.com//dr99vOydJQDGhJpOgDx3K_RYoSg=/242x245:757x760/fit-in/500x500/99designs-contests-attachments/63/63995/attachment_63995910'}/>
            {props.isAuth ? props.login : <NavLink className={s.loginBlock} to={'/login'}>Login</NavLink>}
        </header>
    );
}