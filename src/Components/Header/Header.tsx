import React from "react";
import s from './Header.module.css'

export const Header = ()=>{
    return (
        <header className={s.header}>
            <img src={'https://images-platform.99static.com//dr99vOydJQDGhJpOgDx3K_RYoSg=/242x245:757x760/fit-in/500x500/99designs-contests-attachments/63/63995/attachment_63995910'}/>
        <div className={s.article}>
            Allow yourself the luxury of not interacting with unpleasant people.
            <div>
            -Osho
            </div>
        </div>
        </header>
    );
}