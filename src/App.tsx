import React from 'react';
import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import {Dialogs} from "./Components/Dialoges/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {ProfileContainer} from "./Components/Profile/ProfileAPIContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/'} element={<ProfileContainer/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs/>}/>
                        <Route path={'/profile'}>
                            <Route path={':userId'} element={<ProfileContainer/>}/>
                            <Route index element={<ProfileContainer/>}/>
                        </Route>
                        <Route path={'/users'} element={<UsersContainer/>}/>
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
