import React from 'react';
import style from './sidebar.module.css';

function Sidebar({ openSidebar }) {
    return (
        <div className={openSidebar ? style.sidebar_container_block : style.sidebar_container_none}>
            <ul className={style.sidebar_list}>
                <a href="#home">
                    <li>HOME</li>
                </a>
                <a href="#about">
                    <li>ABOUT</li>
                </a>
                <a href="#services">
                    <li>SERVICES</li>
                </a>
                <a href="#works">
                    <li>WORKS</li>
                </a>
                <a href="#contact">
                    <li>CONTACT</li>
                </a>
            </ul>
        </ div>
    )
}

export default React.memo(Sidebar);