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
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(
                    // [{
                    //     id: 1,
                    //     photoURL: 'https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/17/03/64/51/77/52dc30240cd7.jpg',
                    //     name: 'Alex',
                    //     status: 'I am in love...',
                    //     location: {city: 'Warsaw', country: 'Poland'},
                    //     followed: true
                    // },
                    //     {
                    //         id: 2,
                    //         photoURL: 'https://resizer.mail.ru/p/6a9ef3ed-3969-50c5-b336-3d79241af24e/AAACUEwUwCfstHNwgLcapPo8-WDaILypCRvHOJByGdfuYayi2vynU_UxJbAtaQFMV-a8ptn1LF6mCGRRB2vexAGUGu8.jpg',
                    //         name: 'Nastya',
                    //         status: 'SEARCHING FOR NEW HOUSE, SOS!',
                    //         location: {city: 'Minsk', country: 'Belarus'},
                    //         followed: false
                    //     },
                    //     {
                    //         id: 3,
                    //         photoURL: 'https://i.pinimg.com/originals/ed/52/1f/ed521f513a456a7549967e795d2532fd.jpg',
                    //         name: 'Vika',
                    //         status: 'chill',
                    //         location: {city: 'Minsk', country: 'Belarus'},
                    //         followed: true
                    //     },
                    //     {
                    //         id: 4,
                    //         photoURL: 'https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/10/57/95/78/31/1dcf0bd40cd7.jpg',
                    //         name: 'Evgeny',
                    //         status: 'i do not need someone to love',
                    //         location: {city: 'Moscow', country: 'Russia'},
                    //         followed: true
                    //     },
                    //     {
                    //         id: 5,
                    //         photoURL: 'https://assets.gq.ru/photos/5d9f54184c4d5f0009b285d1/1:1/w_1081,h_1081,c_limit/01.jpg',
                    //         name: 'Sasha',
                    //         status: 'The Weeknd - Die for u 🎵🎵',
                    //         location: {city: 'Warsaw', country: 'Poland'},
                    //         followed: false
                    //     },
                    //     {
                    //         id: 6,
                    //         photoURL: 'https://stuki-druki.com/aforizms/Leonid-Agutin-01.jpg',
                    //         name: 'Nikita',
                    //         status: 'Love has no limits... ',
                    //         location: {city: 'Mogilev', country: 'Belarus'},
                    //         followed: true
                    //     },
                    //     {
                    //         id: 7,
                    //         photoURL: 'https://s5.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2021/02/obi-wan-ewan-mcgregor-star-wars-405x270.jpg',
                    //         name: 'Roman',
                    //         status: 'How to teach a cat to brush??? 🐱 ',
                    //         location: {city: 'Minsk', country: 'Belarus'},
                    //         followed: false
                    //     },
                    //     {
                    //         id: 8,
                    //         photoURL: 'https://i.pinimg.com/originals/a8/65/d0/a865d049b6fb855e9489a8a01dea3281.jpg',
                    //         name: 'Dasha',
                    //         status: 'I need acceptance 😢',
                    //         location: {city: 'Minsk', country: 'Belarus'},
                    //         followed: true
                    //     }],
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