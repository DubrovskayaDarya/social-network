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
import {RootStateType} from "./redux/store";


type AppType = {
    addPost: (value: string) => void,
    updatePost: (post: string) => void,
    state: RootStateType
}

function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/dialogs/*'} element={<Dialogs data={props.state.messagePage.dialogs}/>}/>
                        <Route path={'/profile'} element={<Profile
                            addPost={props.addPost}
                            posts={props.state.profilePage.postItemsInitial}
                            profileInfo={props.state.profilePage.profileInfo}
                            newPostText={props.state.profilePage.newPostText}
                            updatePost={props.updatePost}/>}/>
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
