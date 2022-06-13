import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";

let mapStateToProps = (state: any) => {
    return {
        backgroundInfo: state.profilePage.background
    }
}

export const ProfileContainer = connect(mapStateToProps)(Profile);