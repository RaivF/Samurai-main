import React from 'react';
import s from './Nav.module.css'
import Dialogs from "../Dialogs/Dialogs";
import {NavLink} from "react-router-dom";

let c1 = "item"
let c2 = "active"
const Nav = () => {
    return (

        <nav className={s.nav}>
            <div className={s.item}><NavLink to='/profile' activeClassName={s.active}>profile</NavLink></div>
            <div className={s.item}><NavLink to="/massage" activeClassName={s.active}>massage</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink></div>
            <div className={s.item}><NavLink to="/news" activeClassName={s.active}>news</NavLink></div>
            <div className={s.item}><NavLink to="/music" activeClassName={s.active}>music</NavLink></div>
            <div className={s.item}><NavLink to="/settings" activeClassName={s.active}>settings</NavLink></div>

        </nav>

    )
}
export default Nav