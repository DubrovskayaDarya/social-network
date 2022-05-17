import React, {ChangeEvent, KeyboardEvent, MouseEvent} from "react";
import s from "../Dialogs.module.css";
import {
    ActionTypes,
    addMessageAC,
    DialogsType,
    updateNewMessageAC,
} from "../../../redux/store";

type MessageType = {
    data: Array<DialogsType>
    setMessage: string
    dispatch: (action: ActionTypes) => void
}

export const Message = (props: MessageType) => {
    let newMessage = React.createRef<HTMLInputElement>()

    const setMessageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (newMessage.current == null) {
            return;
        }
        props.dispatch(updateNewMessageAC(newMessage.current.value));
    };

    const setMessageEnterKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter' && newMessage.current != null) {
            props.dispatch(addMessageAC());
        }
    }
    const setMessageClickHandler = () => {
        props.dispatch(addMessageAC());
    };
    const onClickAddMessageHandler = () => {
        props.dispatch(updateNewMessageAC(''));
    }


    return (
        <div>
            {props.data.map((t) => {
                return (
                    <div className={s.space}>
                        <div className={s.messages}>
                            {t.message}
                        </div>
                    </div>)
            })}
            <span>
            <input
                ref={newMessage}
                value={props.setMessage}
                onClick={onClickAddMessageHandler}
                onChange={setMessageChangeHandler}
                onKeyPress={setMessageEnterKeyPressHandler}/>
                <button
                    onClick={setMessageClickHandler}>Send</button>
            </span>
        </div>
    )
}