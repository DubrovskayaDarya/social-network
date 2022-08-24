import React from "react";
import {UserProfileType} from "../../../redux/reducers/profile-reducer";
import {Preloader} from "../../../Common/Preloader/Preloader";

type ProfileInfoType = {
    user: UserProfileType
    defaultAvatar: string
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.user) {
        return <Preloader/>
    }
    return (
        <div>
            <img src={props.user.photos.large ? props.user.photos.large : props.defaultAvatar}/>
            <div>{props.user.aboutMe}</div>
        </div>
    )
}