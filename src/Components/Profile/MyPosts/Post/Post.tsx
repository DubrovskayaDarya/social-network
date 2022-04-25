import React from "react";
import {postsItemsType} from "../MyPosts";
import s from './Post.module.css'
import {MouseEvent} from "react";

type PostPropsType = {
    data: Array<postsItemsType>
    callback: (e: MouseEvent<HTMLButtonElement>)=>void
}

export const Post = (props: PostPropsType) => {
    return (
        <div>{props.data.map((t) => {
            return (<div className={s.post}><img className={s.avatar} src={t.avatar}/>
               <span className={s.text}>{t.message}</span>
                <div>
                <button onClick={props.callback}><img className={s.like} src={'https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png'}/></button>
                    <span>{t.likes}</span>
                </div>
            </div>)
        })}</div>
    )
}