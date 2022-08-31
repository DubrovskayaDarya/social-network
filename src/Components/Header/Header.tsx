import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from "./../../Assets/Images/email-icon.png"

type HeaderPropsType = {
    isAuth: boolean,
    login: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src={logo} alt={'logo'}/>
            {props.isAuth ? props.login : <NavLink className={s.loginBlock} to={'/login'}>Login</NavLink>}
        </header>
    );
}