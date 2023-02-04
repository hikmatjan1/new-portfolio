import React from 'react';
import { MdPhone, MdAlternateEmail } from 'react-icons/md';
import Title from '../about/Title';
import { AiFillGithub } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import style from './contact.module.css';
import Form from './Form';

function Contact() {

    return (
        <>
            <a name="contact"></a>
            <Title
                back="CONTACT"
                front="Get in Touch"
            />
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
                                <Form style={style} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Contact);