import React from 'react';
import c from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={`${c.dialog} ${c.active}`}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={c.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <DialogItem name='Dimka' id='1' />
                <DialogItem name='Valerka' id='2' />
                <DialogItem name='Vita' id='3' />
                <DialogItem name='Maksik' id='4' />
                <DialogItem name='Bratishkin' id='5' />
            </div>
            <div className={c.messages}>
                <Message message='Hi' />
                <Message message='Hello' />
                <Message message='How are you?' />
                <Message message='Yo' />
                <Message message='Good morning' />
            </div>
        </div>
    );
};

export default Dialogs;