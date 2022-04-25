import React from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";


export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink style={(param)=>({color: param.isActive ? 'lightblue':'white'})} to={'/profile'}>Profile</NavLink></div>
            <div className={s.item}><NavLink style={(param)=>({color: param.isActive ? 'lightblue':'white'})} to={'/dialogs'}>Messages</NavLink></div>
            <div className={s.item}><NavLink style={(param)=>({color: param.isActive ? 'lightblue':'white'})} to={'/news'}>News</NavLink></div>
            <div className={s.item}><NavLink style={(param)=>({color: param.isActive ? 'lightblue':'white'})} to={'/music'}>Music</NavLink></div>
            <div className={s.item}><NavLink style={(param)=>({color: param.isActive ? 'lightblue':'white'})} to={'/setting'}>Settings</NavLink></div>
        </nav>
    );
}