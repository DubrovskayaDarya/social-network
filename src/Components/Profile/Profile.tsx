import React from "react";
import s from './Profile.module.css'
import {MyPosts, postsItemsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";



type ProfileType = {
    data: Array<postsItemsType>
}


export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <div>
                {/*Background*/}
                <img className={s.background}
                     src={'https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3798.jpg?t=st=1650550407~exp=1650551007~hmac=e4a15e8a4f13dc52022bdbe9c7cd16492222d7c6a293ab91a398af0bfdfaac4a&w=740'}/>
            </div>
            <ProfileInfo/>
            <div>
                <MyPosts data={props.data}/>
            </div>
        </div>
    )
}