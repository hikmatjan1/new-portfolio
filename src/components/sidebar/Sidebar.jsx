import React from 'react';
import style from './sidebar.module.css';

function Sidebar({ openSidebar }) {
    return (
        <div className={openSidebar ? style.sidebar_container_block : style.sidebar_container_none}>
            <ul className={style.sidebar_list}>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>WORKS</li>
                <li>CONTACT</li>
            </ul>
        </ div>
    )
}

export default React.memo(Sidebar);