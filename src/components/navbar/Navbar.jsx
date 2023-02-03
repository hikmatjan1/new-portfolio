import React, { useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import Sidebar from '../sidebar/Sidebar';
import style from './navbar.module.css';

function Navbar() {
    const [openSidebar, setOpenSidebar] = useState(false);
    const navbar_ref = useRef();

    let prevScrollpos = window.pageYOffset;
    window.addEventListener('scroll', () => {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            navbar_ref.current.style.top = "0";
            navbar_ref.current.style.backgroundColor = "rgba(0, 0, 0, 0.40)";
        } else {
            navbar_ref.current.style.top = "-50px";
        }
        if (currentScrollPos === 0) {
            navbar_ref.current.style.backgroundColor = "transparent";
        }
        prevScrollpos = currentScrollPos;
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth > 678) {
            setOpenSidebar(false);
        }
    })

    return (
        <div className={style.navbar} id="navbar" ref={navbar_ref}>
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
                            <a href="#home">
                                <span>HOME</span>
                                <span className={style.underline}></span>
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                <span>ABOUT</span>
                                <span className={style.underline}></span>
                            </a>
                        </li>
                        <li>
                            <a href="#services">
                                <span>SERVICES</span>
                                <span className={style.underline}></span>
                            </a>
                        </li>
                        <li>
                            <a href="#works">
                                <span>WORKS</span>
                                <span className={style.underline}></span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <span>CONTACT</span>
                                <span className={style.underline}></span>
                            </a>
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