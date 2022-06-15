import React from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import settings from '../../Assets/Images/mainSettingsIcon.png'
import music from '../../Assets/Images/mainMusicIcon.png'
import news from '../../Assets/Images/mainNewsIcon.png'
import dialogs from '../../Assets/Images/mainDialogIcon.png'
import users from '../../Assets/Images/mainUsersIcon.png'
import profile from '../../Assets/Images/mainProfileIcon.png'

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink style={(param) => ({color: param.isActive ? 'lightblue' : 'white'})}
                                             to={'/profile'}>
                <img className={s.iconImage} src={profile}/> Profile</NavLink></div>
            <div className={s.item}><NavLink style={(param) => ({color: param.isActive ? 'lightblue' : 'white'})}
                                             to={'/users'}>
                <img className={s.iconImage} src={users}/> Users</NavLink></div>
            <div className={s.item}><NavLink style={(param) => ({color: param.isActive ? 'lightblue' : 'white'})}
                                             to={'/dialogs'}>
                <img className={s.iconImage} src={dialogs}/> Messages</NavLink></div>
            <div className={s.item}><NavLink style={(param) => ({color: param.isActive ? 'lightblue' : 'white'})}
                                             to={'/news'}>
                <img className={s.iconImage} src={news}/> News</NavLink></div>
            <div className={s.item}><NavLink style={(param) => ({color: param.isActive ? 'lightblue' : 'white'})}
                                             to={'/music'}>
                <img className={s.iconImage} src={music}/> Music</NavLink></div>
            <div className={s.item}><NavLink style={(param) => ({color: param.isActive ? 'lightblue' : 'white'})}
                                             to={'/setting'}>
                <img className={s.iconImage} src={settings}/> Settings</NavLink></div>
        </nav>
    );
}