import React from "react";
import s from './Post.module.css'
import {MouseEvent} from "react";
import {postItemsInitialType} from "../../../../redux/store";

type PostPropsType = {
    posts: Array<postItemsInitialType>
    callback: (e: MouseEvent<HTMLButtonElement>)=>void
}

export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div>{props.posts.map((t) => {
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