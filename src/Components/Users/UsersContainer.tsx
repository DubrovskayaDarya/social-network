import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followUserAC, setUsersAC, unfollowUserAC, userType} from "../../redux/reducers/users-reducer";

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users1
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        followUser: (userId: number) => {
            dispatch(followUserAC(userId))
        },
        unfollowUser: (userId: number) => {
            dispatch(unfollowUserAC(userId))
        },
        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);