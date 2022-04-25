import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {postsItems, dialogsArray} from "./redux/state";


export type DialogsArrayType = {
    id: number
    name: string
    link: string
    message: string
}

ReactDOM.render(
    <App posts={postsItems} dialogs={dialogsArray}/>,
  document.getElementById('root')
);


