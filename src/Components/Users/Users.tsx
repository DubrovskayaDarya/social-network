import React from "react";
import s from './Users.module.css'
import avatar from "../../Assets/Images/userAvatar.png";
import {userType} from "../../redux/reducers/users-reducer";
import ReactPaginate from 'react-paginate';
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    totalUsersCount: number
    pageUsersSize: number
    currentPage: number
    isFetching: boolean
    onClickPage: (page: number) => void
    users: Array<userType>
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageUsersSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected + 1) % pages.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        props.onClickPage(newOffset);
    };

    return (
        <div>
            <div>
                <ReactPaginate
                    className={s.pagination}
                    breakLabel="..."
                    nextLabel=">>"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={1}
                    pageCount={pagesCount}
                    previousLabel="<<"
                />
            </div>
            {props.users.map((u) => {
                return (
                    <div key={u.id} className={s.container}>
                <span className={s.child}>
                    <NavLink to={'/profile/'+u.id}>
                <div><img className={s.avatar} src={u.photos.small === null ? avatar : u.photos.small}/></div>
                        </NavLink>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollowUser(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.followUser(u.id)
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
            <div>
                <ReactPaginate
                    containerClassName={s.pagination}
                    activeClassName={s.activePagination}
                    breakLabel="..."
                    nextLabel=">>"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={1}
                    pageCount={pagesCount}
                    previousLabel="<<"
                />
            </div>
        </div>
    )
}