import React, { useRef } from 'react';
import Zoom from 'react-reveal/Zoom';
import { MdPhone, MdAlternateEmail } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import styleAbout from '../about/about.module.css';
import style from './contact.module.css';

function Contact() {
    const email_ref = useRef();
    const name_ref = useRef();
    const desc_ref = useRef();

    // submit
    const submitHandler = (e) => {
        e.preventDefault();

        // to do server

    }

    return (
        <>
            <a name="contact"></a>
            <div className={styleAbout.about}>
                <div className={styleAbout.about_relative}>
                    <Zoom left>
                        <h1 >CONTACT</h1>
                    </Zoom>
                    <Zoom bottom>
                        <div className={styleAbout.about_more} >
                            <h2>Get in Touch</h2>
                            <span className={styleAbout.underline}></span>
                        </div>
                    </Zoom>
                </div>
            </div>
            <div className={style.contact}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-3 mb-5">
                            <div className={style.contact_left}>
                                <h3>ADDRESS</h3>
                                <span>Bukhara city, Sobir Rakhimov street</span>
                                <span><MdPhone style={{ color: "#2272f2" }} />+998 90 718-63-56</span>
                                <span><MdAlternateEmail style={{ color: "#2272f2" }} />thravshanovich@gmail.com</span>
                                <h3 className='mt-3'>FOLLOW ME</h3>
                                <ul>
                                    <li><AiFillGithub className={style.AiFillGithub} /></li>
                                    <li><FaTelegramPlane className={style.FaTelegramPlane} /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 mb-3">
                            <div className={style.contact_right}>
                                <h3 className='mb-4'>SEND US A NOTE</h3>
                                <form onSubmit={submitHandler}>
                                    <div className={style.inputs}>
                                        <input
                                            type="text"
                                            placeholder='Name'
                                            required
                                            onInvalid={e => e.target.setCustomValidity("Name is required")}
                                            onChange={e => e.target.setCustomValidity("")}
                                            ref={name_ref}
                                        />
                                        <input
                                            type="email"
                                            placeholder='Email'
                                            required
                                            onInvalid={e => e.target.setCustomValidity("Email is required")}
                                            onChange={e => e.target.setCustomValidity("")}
                                            ref={email_ref}
                                        />
                                    </div>
                                    <textarea
                                        rows="5"
                                        required
                                        onInvalid={e => e.target.setCustomValidity("Description is required")}
                                        onChange={e => e.target.setCustomValidity("")}
                                        ref={desc_ref}
                                    ></textarea>
                                    <div className={style.buttons}>
                                        <button type='submit'>Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Contact);