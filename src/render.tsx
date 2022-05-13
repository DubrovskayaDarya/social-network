import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from "./redux/state";
import {addPost} from "./redux/state";
import {updateNewPost} from "./redux/state";


export let rerenderTree = (state: RootStateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updatePost={updateNewPost}
        />,
        document.getElementById('root')
    )
};
