import React from "react";
import {addMessageAC, updateNewMessageAC} from "../../../redux/reducers/message-reducer";
import {Message} from "./Message";
import {connect} from "react-redux";

let mapStateToProps = (state: any) => {
    return {
        messages: state.messagePage.dialogs,
        setMessage: state.messagePage.newMessage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateMessage: (text: string) => {
            dispatch(updateNewMessageAC(text))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}

export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);