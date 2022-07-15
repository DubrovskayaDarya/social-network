import React from "react";
import {userType} from "../../redux/reducers/users-reducer";
import s from './Users.module.css'
import avatar from '../../Assets/Images/userAvatar.png'
import axios from "axios";

type usersPropsType = {
    users: Array<userType>
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsers: (users: Array<userType>) => void
}

export class Users extends React.Component<usersPropsType, userType> {
    constructor(props: usersPropsType) {
        super(props);

        axios
            .get('https://social-network.samuraijs.com/api/1.0/users', {
                withCredentials: true,
                headers: {
                    "API-KEY": `${process.env.REACT_APP_API_KEY}`
                }
            })
            .then(response => {
                this.props.setUsers(
                    response.data.items)
            })
    };


    render() {
        return (
            <div>
                {this.props.users.map((u) => {
                    return (
                        <div key={u.id} className={s.container}>
                    <span className={s.child}>
                        <div><img className={s.avatar} src={u.photos.small === null ? avatar : u.photos.small}/></div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollowUser(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.followUser(u.id)
                            }}>Follow</button>
                        }
                    </span>
                            <span className={s.child}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                    </span>
                        </div>
                    )
                })}
            </div>
        );
    }
}