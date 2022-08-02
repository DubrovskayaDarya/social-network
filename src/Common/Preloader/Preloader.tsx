import React from "react";
import loading from '../../Assets/Images/loading.svg';
import style from './Preloader.module.css'

export const Preloader = () => {
    return <div className={style.preloader}>
        <img src={loading}/>
    </div>
}