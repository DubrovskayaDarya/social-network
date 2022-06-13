import React from "react";
import s from './Profile.module.css'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfoContainer} from "./ProfileInfo/ProfileInfoContainer";

type ProfileType = {
    backgroundInfo: string
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <div>
                {/*Background*/}
                <img className={s.background}
                     src={props.backgroundInfo}/>
            </div>
            <ProfileInfoContainer/>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    )
}