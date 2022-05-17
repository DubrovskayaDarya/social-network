import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Dialogs} from "./Components/Dialoges/Dialogs";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {ActionTypes, RootStateType} from "./redux/store";

type AppType = {
    state: RootStateType,
    dispatch: (action: ActionTypes) => void
}

function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/dialogs/*'} element={<Dialogs
                            data={props.state.messagePage.dialogs}
                            setMessage={props.state.messagePage.newMessage}
                            dispatch={props.dispatch}/>}/>
                        <Route path={'/profile'} element={<Profile
                            posts={props.state.profilePage.postItemsInitial}
                            profileInfo={props.state.profilePage.profileInfo}
                            newPostText={props.state.profilePage.newPostText}
                            dispatch={props.dispatch}/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
