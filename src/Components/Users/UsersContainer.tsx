import React from "react";
import {connect} from "react-redux";
import {
    followUserAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowUserAC,
    userType
} from "../../redux/reducers/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../Common/Preloader/Preloader";

type usersPropsType = {
    users: Array<userType>
    pageUsersSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setUsersTotalCount: (totalCount: number) => void
    setToggle: (isFetching: boolean) => void
}

class UsersAPIContainer extends React.Component<usersPropsType, userType> {

    componentDidMount() {
        this.props.setToggle(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageUsersSize}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": `${process.env.REACT_APP_API_KEY}`
                }
            })
            .then(response => {
                this.props.setToggle(false)
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
            })
    }

    onClickPage = (page: number) => {
        this.props.setCurrentPage(page);
        this.props.setToggle(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageUsersSize}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": `${process.env.REACT_APP_API_KEY}`
                }
            })
            .then(response => {
                this.props.setToggle(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageUsersSize={this.props.pageUsersSize}
                   currentPage={this.props.currentPage}
                   onClickPage={this.onClickPage}
                   users={this.props.users}
                   followUser={this.props.followUser}
                   unfollowUser={this.props.unfollowUser}
                   isFetching={this.props.isFetching}/>
        </>
    }
}

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users1,
        pageUsersSize: state.usersPage.pageUsersSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setUsersTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
        setToggle: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);