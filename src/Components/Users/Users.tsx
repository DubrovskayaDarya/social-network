import React, {useEffect} from "react";
import s from './Users.module.css'
import avatar from "../../Assets/Images/userAvatar.png";
import {
    fetchingUsersTC,
    followUserTC,
    onClickPageTC,
    unfollowUserTC,
    usersPageType,
    userType
} from "../../redux/reducers/users-reducer";
import ReactPaginate from 'react-paginate';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store/redux-store";


export const Users = () => {

    const dispatch = useDispatch();
    const state = useSelector<AppRootStateType, usersPageType>(state => state.usersPage);
    console.log(state)


    let pagesCount = Math.ceil(state.totalUsersCount / state.pageUsersSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected + 1) % pages.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        dispatch(onClickPageTC(newOffset));
    };


    useEffect(() => {
        dispatch(fetchingUsersTC(state.currentPage))
    }, [])


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
            {state.users1.map((u: userType) => {
                return (
                    <div key={u.id} className={s.container}>
                <span className={s.child}>
                    <NavLink to={'/profile/' + u.id}>
                <div><img className={s.avatar} src={u.photos.small === null ? avatar : u.photos.small}/></div>
                        </NavLink>
                    {u.followed
                        ? <button onClick={() => {
                            dispatch(unfollowUserTC(u.id))
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            dispatch(followUserTC(u.id))
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