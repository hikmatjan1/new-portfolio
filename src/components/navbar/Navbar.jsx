import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import Sidebar from '../sidebar/Sidebar';
import style from './navbar.module.css';

function Navbar() {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <div className={style.navbar}>
            <div className="container">
                <div className={style.navbar_container}>
                    <h3>MyPortfolio</h3>

                    {openSidebar ? (
                        <MdClose className={style.AiOutlineMenu} style={{ color: "#fff" }} onClick={() => setOpenSidebar(false)} />
                    ) : (
                        <AiOutlineMenu className={style.AiOutlineMenu} onClick={() => setOpenSidebar(true)} />
                    )}

                    <ul>
                        <li>
                            <span>HOME</span>
                            <span className={style.underline}></span>
                        </li>
                        <li>
                            <span>ABOUT</span>
                            <span className={style.underline}></span>
                        </li>
                        <li>
                            <span>SERVICES</span>
                            <span className={style.underline}></span>
                        </li>
                        <li>
                            <span>WORKS</span>
                            <span className={style.underline}></span>
                        </li>
                        <li>
                            <span>CONTACT</span>
                            <span className={style.underline}></span>
                        </li>
                    </ul>
                </div>

                {/* sidebar */}
                <Sidebar openSidebar={openSidebar} />
            </div>
        </div>
    )
}

export default React.memo(Navbar);