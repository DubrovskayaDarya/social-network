import React from "react";
import {UserProfileType} from "../../../redux/reducers/profile-reducer";
import {Preloader} from "../../../Common/Preloader/Preloader";
import s from './ProfileInfo.module.css'

type ProfileInfoType = {
    user: UserProfileType
    defaultAvatar: string
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.user) {
        return <Preloader/>
    }
    return (
        <div className={s.infoBlock}>
            <img className={s.avatar} src={props.user.photos.large ? props.user.photos.large : props.defaultAvatar}/>

            <table className={s.infoList} cellPadding={10}>
                <td className={s.infoListHeaders}>
                    <tr>Name</tr>
                    <tr>About me</tr>
                </td>
                <td>
                    <tr>{props.user.fullName}</tr>
                    <tr>{props.user.aboutMe}</tr>
                </td>

          </table>
        </div>
    )
}