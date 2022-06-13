import React from "react";
import {connect} from "react-redux";
import {ProfileInfo} from "./ProfileInfo";

let mapStateToProps = (state: any) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}

export const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);