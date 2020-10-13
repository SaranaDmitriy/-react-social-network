import React from 'react';
import c from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={`${c.dialog} ${c.active}`}>
            <NavLink to={'/dialogs/' + props.id}>
                <img alt='' src={props.avatar}></img>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;